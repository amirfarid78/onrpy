#!/usr/bin/env bash
# =============================================================================
#  onrpy – Simplified VPS Provisioner
#  Tested on: Ubuntu 22.04 LTS / Ubuntu 24.04 LTS
#  Usage:  sudo bash scripts/install-vps.sh
# =============================================================================
set -Eeuo pipefail

# ── Colour helpers ─────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; RESET='\033[0m'

info()    { echo -e "${CYAN}[INFO]${RESET}  $*"; }
success() { echo -e "${GREEN}[OK]${RESET}    $*"; }
warn()    { echo -e "${YELLOW}[WARN]${RESET}  $*"; }
error()   { echo -e "${RED}[ERROR]${RESET} $*" >&2; exit 1; }
header()  { echo -e "\n${BOLD}${CYAN}━━━  $*  ━━━${RESET}\n"; }

# ── Constants ──────────────────────────────────────────────────────────────────
APP_NAME="onrpy"
APP_DIR="/opt/${APP_NAME}"
LOG_DIR="/var/log/${APP_NAME}"
ENV_FILE="${APP_DIR}/.env.production"

RUN_USER="${SUDO_USER:-$USER}"
if [[ "$RUN_USER" == "root" ]]; then
  for c in deploy www-data ubuntu; do
    if id "$c" &>/dev/null; then RUN_USER="$c"; break; fi
  done
fi
if [[ "$RUN_USER" == "root" ]]; then warn "No non-root user found. Will run as root."; fi
RUN_GROUP="$(id -gn "$RUN_USER")"

[[ "${EUID}" -ne 0 ]] && error "Please run with sudo or as root."

command_exists() { command -v "$1" &>/dev/null; }

DB_NAME="onrpy"
DB_USER="onrpy_user"
DB_PASSWORD="$(tr -dc 'A-Za-z0-9_-' </dev/urandom | head -c 32 || true)"
DOMAIN_OR_IP=""
APP_PORT="3000"

collect_inputs() {
  header "onrpy VPS Provisioner"
  echo "This script will install Node.js, PM2, Nginx, and setup the PostgreSQL database."
  read -r -p "Enter Domain name or public IP address: " DOMAIN_OR_IP
  [[ -z "$DOMAIN_OR_IP" ]] && error "Domain/IP is required."
}

install_system_packages() {
  header "Installing System Packages"
  apt-get update -q
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates curl gnupg git rsync nginx postgresql postgresql-contrib build-essential ufw certbot python3-certbot-nginx \
    2>&1 | grep -E '^(Get|Setting|Unpacking|Selecting|Preparing|Processing|E:)' || true
  success "System packages installed."
}

install_nodejs_and_pm2() {
  header "Node.js & PM2"
  if ! command_exists node || [[ "$(node -v | sed -E 's/^v([0-9]+).*/\1/')" -lt 20 ]]; then
    info "Installing Node.js 20.x..."
    mkdir -p /etc/apt/keyrings
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" > /etc/apt/sources.list.d/nodesource.list
    apt-get update -q
    DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs
  fi
  success "Node.js $(node -v) installed."

  if ! command_exists pm2; then npm install -g pm2; fi
  success "PM2 installed."
}

setup_directories() {
  header "Directories"
  mkdir -p "$APP_DIR" "$LOG_DIR"
  chown -R "${RUN_USER}:${RUN_GROUP}" "$APP_DIR" "$LOG_DIR"
  success "Directories created."
}

setup_postgres() {
  header "PostgreSQL Setup"
  systemctl enable postgresql --now

  local esc_pw="${DB_PASSWORD//\'/\'\'}"
  
  if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='${DB_USER}'" | grep -q 1; then
    sudo -u postgres psql -c "CREATE USER ${DB_USER} WITH ENCRYPTED PASSWORD '${esc_pw}';"
  else
    sudo -u postgres psql -c "ALTER USER ${DB_USER} WITH ENCRYPTED PASSWORD '${esc_pw}';"
  fi

  if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1; then
    sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};"
  fi
  sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};"

  local hba_file
  hba_file="$(sudo -u postgres psql -tAc "SHOW hba_file")"
  if ! grep -qE "^host\s+all\s+all\s+127\.0\.0\.1/32\s+md5" "$hba_file" 2>/dev/null; then
    echo "host    all             all             127.0.0.1/32            md5" >> "$hba_file"
    systemctl reload postgresql
  fi
  success "Database '${DB_NAME}' and user '${DB_USER}' configured."
}

write_starter_env() {
  header "Starter .env.production"
  local db_url="postgresql://${DB_USER}:${DB_PASSWORD}@127.0.0.1:5432/${DB_NAME}?schema=public"
  local jwt_secret="$(tr -dc 'A-Za-z0-9_-' </dev/urandom | head -c 64 || true)"

  cat > "$ENV_FILE" <<EOF
NODE_ENV=production
PORT=${APP_PORT}
DATABASE_URL=${db_url}
JWT_SECRET=${jwt_secret}

# ⚠️ ACTION REQUIRED: Fill out the rest of this file manually before starting the app!

ADMIN_PHONE=+923001234567
ADMIN_PASSWORD=change-me-to-a-secure-password
ADMIN_NAME=Admin
REFERRAL_REWARD_AMOUNT=50

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
EOF

  chown "${RUN_USER}:${RUN_GROUP}" "$ENV_FILE"
  chmod 600 "$ENV_FILE"
  success "Written to ${ENV_FILE}"
}

configure_nginx_and_ufw() {
  header "Nginx & UFW Firewall"
  local conf="/etc/nginx/sites-available/${APP_NAME}"
  cat > "$conf" <<NGEOF
server {
    listen 80;
    server_name ${DOMAIN_OR_IP};
    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGEOF
  ln -sf "$conf" "/etc/nginx/sites-enabled/${APP_NAME}"
  rm -f /etc/nginx/sites-enabled/default
  systemctl enable nginx --now
  systemctl restart nginx

  ufw allow OpenSSH >/dev/null
  ufw allow 'Nginx Full' >/dev/null
  ufw --force enable >/dev/null
  success "Nginx proxy created and UFW enabled."
}

print_summary() {
  echo -e "\n${BOLD}${GREEN}✓ VPS Provisioning Complete!${RESET}"
  echo -e "\n${BOLD}PostgreSQL Credentials:${RESET}"
  echo "  Database: ${DB_NAME}"
  echo "  User:     ${DB_USER}"
  echo "  Password: ${DB_PASSWORD}"
  echo -e "\n${BOLD}Next Steps for You:${RESET}"
  echo -e "  1. Copy your code to ${APP_DIR}."
  echo -e "  2. Edit ${ENV_FILE} and fill in Firebase/Admin details."
  echo -e "  3. Run: npm install"
  echo -e "  4. Run: npx prisma migrate deploy"
  echo -e "  5. Run: npm run db:seed"
  echo -e "  6. Run: npm run build"
  echo -e "  7. Run: pm2 start ecosystem.config.js\n"
}

main() {
  collect_inputs
  install_system_packages
  install_nodejs_and_pm2
  setup_directories
  setup_postgres
  write_starter_env
  configure_nginx_and_ufw
  print_summary
}

main "$@"
