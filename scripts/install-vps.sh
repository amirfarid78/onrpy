#!/usr/bin/env bash
# =============================================================================
#  onrpy – Fully Automated VPS Provisioner (Zero-Touch to Live)
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
  for c in ubuntu debian deploy; do if id "$c" &>/dev/null; then RUN_USER="$c"; break; fi; done
fi
if [[ "$RUN_USER" == "root" ]]; then warn "No non-root user found. Will run as root."; fi
RUN_GROUP="$(id -gn "$RUN_USER")"
RUN_HOME="$(eval echo "~${RUN_USER}")"

[[ "${EUID}" -ne 0 ]] && error "Please run with sudo or as root."
command_exists() { command -v "$1" &>/dev/null; }

DB_NAME="onrpy"
DB_USER="onrpy_user"
DB_PASSWORD="$(tr -dc 'A-Za-z0-9' </dev/urandom | head -c 32 || true)"
APP_PORT="3000"

# ── 1. Read Domain ─────────────────────────────────────────────────────────────
header "onrpy - Full Auto Installer"
read -r -p "Enter your Domain Name (e.g. reelo.com) or Public IP: " DOMAIN_OR_IP
[[ -z "$DOMAIN_OR_IP" ]] && error "Domain/IP is required."

# ── 2. System Packages ─────────────────────────────────────────────────────────
header "Installing System Packages"
apt-get update -q
DEBIAN_FRONTEND=noninteractive apt-get install -y \
  ca-certificates curl gnupg git rsync nginx postgresql postgresql-contrib build-essential ufw certbot python3-certbot-nginx \
  2>&1 | grep -E '^(Get|Setting|Unpacking|Selecting|Preparing|Processing|E:)' || true
success "System packages installed."
# ── 2.5 Add Swap Space ─────────────────────────────────────────────────────────
header "Checking Swap Space"
if [[ "$(free -m | awk '/^Swap:/ {print $2}')" -eq 0 ]]; then
  info "No swap file found. Creating 2GB swap to prevent Next.js build crashes..."
  fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
  success "2GB swap file created and enabled."
else
  success "Swap space is already configured."
fi
# ── 3. Node.js & PM2 ───────────────────────────────────────────────────────────
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

# ── 4. Directories & Sync ──────────────────────────────────────────────────────
header "Syncing Project Files"
mkdir -p "$APP_DIR" "$LOG_DIR"
chown -R "${RUN_USER}:${RUN_GROUP}" "$APP_DIR" "$LOG_DIR"

rsync -a --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '*.log' \
  "$(dirname "$0")/../" "${APP_DIR}/"

chown -R "${RUN_USER}:${RUN_GROUP}" "$APP_DIR"
success "Project files synced to ${APP_DIR}."

# ── 5. PostgreSQL Database Setup ───────────────────────────────────────────────
header "PostgreSQL Database Setup"
systemctl enable postgresql --now
sleep 3 # Ensure service is fully up

if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='${DB_USER}'" | grep -q 1; then
  sudo -u postgres psql -c "CREATE USER ${DB_USER} WITH ENCRYPTED PASSWORD '${DB_PASSWORD}';"
else
  sudo -u postgres psql -c "ALTER USER ${DB_USER} WITH ENCRYPTED PASSWORD '${DB_PASSWORD}';"
fi

if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1; then
  sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};"
fi
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};"

# Ensure pg_hba.conf allows local md5 auth
hba_file="$(sudo -u postgres psql -tAc "SHOW hba_file")"
if ! grep -qE "^host\s+all\s+all\s+127\.0\.0\.1/32\s+md5" "$hba_file" 2>/dev/null; then
  echo "host    all             all             127.0.0.1/32            md5" >> "$hba_file"
  systemctl reload postgresql
fi
success "Database created successfully."

# ── 6. Environment Setup ───────────────────────────────────────────────────────
header "Environment Config (.env.production)"
cp "${APP_DIR}/env.example" "$ENV_FILE"

# Inject DB credentials and JWT Secret
local_db_url="postgresql://${DB_USER}:${DB_PASSWORD}@127.0.0.1:5432/${DB_NAME}?schema=public"
jwt_secret="$(tr -dc 'A-Za-z0-9_-' </dev/urandom | head -c 64 || true)"

# Use sed to replace the placeholder values
sed -i "s|^DATABASE_URL=.*|DATABASE_URL=\"${local_db_url}\"|" "$ENV_FILE"
sed -i "s|^JWT_SECRET=.*|JWT_SECRET=\"${jwt_secret}\"|" "$ENV_FILE"

chown "${RUN_USER}:${RUN_GROUP}" "$ENV_FILE"
chmod 600 "$ENV_FILE"
success "env.example copied and database credentials injected."

# ── 7. Build, Migrate, and Seed ────────────────────────────────────────────────
header "Installing, Migrating, and Building App"

info "Cleaning old node_modules (if any)..."
rm -rf "${APP_DIR}/node_modules" "${APP_DIR}/.next" "${APP_DIR}/package-lock.json"

info "Installing dependencies..."
sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && npm config set cache '${APP_DIR}/.npm-cache' --global=false && npm install"

info "Generating Prisma client..."
sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && npx prisma generate"

info "Migrating database..."
sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && set -a; source '${ENV_FILE}'; set +a; npx prisma migrate deploy"

info "Seeding database..."
sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && set -a; source '${ENV_FILE}'; set +a; npm run db:seed" || warn "Seed script returned an error, skipping."

info "Building Next.js..."
sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && set -a; source '${ENV_FILE}'; set +a; npm run build"

success "App built and ready."

# ── 8. PM2 Process Guard ───────────────────────────────────────────────────────
header "Starting PM2 Process"
sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && pm2 delete '${APP_NAME}' 2>/dev/null || true"
sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && set -a; source '${ENV_FILE}'; set +a; pm2 start ecosystem.config.js"
sudo -u "$RUN_USER" bash -lc "pm2 save"

pm2 startup systemd -u "$RUN_USER" --hp "$RUN_HOME" 2>/dev/null | grep 'sudo' | bash || true
success "PM2 running and saved on boot."

# ── 9. Nginx & SSL ─────────────────────────────────────────────────────────────
header "Nginx Configuration & SSL"

nginx_conf="/etc/nginx/sites-available/${APP_NAME}"
cat > "$nginx_conf" <<NGEOF
server {
    listen 80;
    server_name ${DOMAIN_OR_IP};
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGEOF

ln -sf "$nginx_conf" "/etc/nginx/sites-enabled/${APP_NAME}"
rm -f /etc/nginx/sites-enabled/default
systemctl enable nginx --now
systemctl restart nginx

# UFW Firewall
ufw allow OpenSSH >/dev/null
ufw allow 'Nginx Full' >/dev/null
ufw --force enable >/dev/null

# Attempt SSL if it looks like a domain (contains a dot, doesn't start with a number)
if [[ "$DOMAIN_OR_IP" =~ [a-zA-Z] ]]; then
  info "Attempting Let's Encrypt SSL for ${DOMAIN_OR_IP}..."
  certbot --nginx -d "$DOMAIN_OR_IP" --non-interactive --agree-tos -m "admin@${DOMAIN_OR_IP}" --redirect || warn "SSL failed (ensure DNS points to this IP)."
else
  info "IP Address detected, skipping Let's Encrypt SSL."
fi

# ── Summary ────────────────────────────────────────────────────────────────────
echo -e "\n${BOLD}${GREEN}====================================================${RESET}"
echo -e "${BOLD}${GREEN} ✓ INSTALLATION COMPLETE & LIVE!${RESET}"
echo -e "${BOLD}${GREEN}====================================================${RESET}\n"
echo -e "  ${BOLD}URL:${RESET}       http://${DOMAIN_OR_IP}"
echo -e "  ${BOLD}Database:${RESET}  ${DB_NAME} / ${DB_USER}"
echo -e "  ${BOLD}DB Pass:${RESET}   ${DB_PASSWORD}"
echo -e "\n  ${BOLD}Next steps:${RESET}"
echo -e "  1. If you need to edit your Firebase keys in the future, edit:"
echo -e "     nano ${ENV_FILE}"
echo -e "     then run: pm2 reload ${APP_NAME}\n"
