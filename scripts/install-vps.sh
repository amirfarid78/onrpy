#!/usr/bin/env bash
# =============================================================================
#  onrpy – All-in-One VPS Installer
#  Tested on: Ubuntu 22.04 LTS / Ubuntu 24.04 LTS
#  Usage:  sudo bash scripts/install-vps.sh
#          (run from project root cloned on the VPS)
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
NGINX_CONF="/etc/nginx/sites-available/${APP_NAME}"
NGINX_ENABLED="/etc/nginx/sites-enabled/${APP_NAME}"

# Work out which non-root user will own the app process.
RUN_USER="${SUDO_USER:-$USER}"
if [[ "$RUN_USER" == "root" ]]; then
  for candidate in deploy www-data ubuntu; do
    if id "$candidate" &>/dev/null; then RUN_USER="$candidate"; break; fi
  done
fi
if [[ "$RUN_USER" == "root" ]]; then
  warn "No non-root user found. The app will run as root (not recommended for production)."
fi
RUN_GROUP="$(id -gn "$RUN_USER")"
RUN_HOME="$(eval echo "~${RUN_USER}")"
ENV_FILE="${APP_DIR}/.env.production"

# ── Guard ──────────────────────────────────────────────────────────────────────
[[ "${EUID}" -ne 0 ]] && error "Please run with sudo or as root."

# ── Helpers ────────────────────────────────────────────────────────────────────
command_exists() { command -v "$1" &>/dev/null; }

random_string() { tr -dc 'A-Za-z0-9_-' </dev/urandom | head -c "${1:-48}" 2>/dev/null || true; }

validate_pg_identifier() {
  [[ "$1" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]] || error "'$1' is not a valid PostgreSQL identifier."
}

sql_escape() { printf '%s' "${1//\'/\'\'}"; }

prompt_input() {
  local -n _ref=$1
  local prompt="$2" default="${3:-}" secret="${4:-false}"
  local raw
  if [[ "$secret" == "true" ]]; then
    read -r -s -p "$prompt" raw; echo
  else
    read -r -p "$prompt" raw
  fi
  _ref="${raw:-$default}"
}

prompt_multiline() {
  # Read until the user types END on a line by itself.
  local -n _ref=$1
  local prompt="$2"
  echo "$prompt"
  echo "  (paste the value; type END on a new line when done)"
  local buf="" line
  while IFS= read -r line; do
    [[ "$line" == "END" ]] && break
    buf+="$line"$'\n'
  done
  _ref="${buf%$'\n'}"   # strip trailing newline
}

# ── Input collection ───────────────────────────────────────────────────────────
DB_NAME="onrpy"
DB_USER="onrpy_user"
DB_PASSWORD=""
DB_HOST="127.0.0.1"
DB_PORT="5432"

DOMAIN_OR_IP=""
APP_PORT="3000"

ADMIN_PHONE="+923001234567"
ADMIN_PASSWORD=""
ADMIN_NAME="Admin"
REFERRAL_REWARD_AMOUNT="50"

JWT_SECRET=""

# Firebase client
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""

# Firebase admin
FIREBASE_PROJECT_ID=""
FIREBASE_CLIENT_EMAIL=""
FIREBASE_PRIVATE_KEY=""

INSTALL_SSL="n"

collect_inputs() {
  header "onrpy VPS Installer"
  echo "Answer each prompt. Press ENTER to accept the default shown in [brackets]."
  echo ""

  # ── Server ──
  header "Server"
  prompt_input DOMAIN_OR_IP "Domain name or public IP address: "
  [[ -z "$DOMAIN_OR_IP" ]] && error "Domain/IP is required."

  prompt_input APP_PORT "Application port [${APP_PORT}]: " "$APP_PORT"

  # ── PostgreSQL ──
  header "PostgreSQL Database"
  prompt_input DB_NAME "Database name [${DB_NAME}]: " "$DB_NAME"
  prompt_input DB_USER "Database username [${DB_USER}]: " "$DB_USER"
  validate_pg_identifier "$DB_NAME"
  validate_pg_identifier "$DB_USER"

  prompt_input DB_PASSWORD "Database password (leave blank to auto-generate): " "" true
  if [[ -z "$DB_PASSWORD" ]]; then
    DB_PASSWORD="$(random_string 32)"
    info "Auto-generated DB password."
  fi

  # ── Admin account ──
  header "Admin Account (seeded into database)"
  prompt_input ADMIN_PHONE "Admin phone number [${ADMIN_PHONE}]: " "$ADMIN_PHONE"
  while true; do
    prompt_input ADMIN_PASSWORD "Admin password (min 8 chars): " "" true
    [[ ${#ADMIN_PASSWORD} -ge 8 ]] && break
    warn "Password must be at least 8 characters. Try again."
  done
  prompt_input ADMIN_NAME "Admin display name [${ADMIN_NAME}]: " "$ADMIN_NAME"
  prompt_input REFERRAL_REWARD_AMOUNT "Referral reward amount PKR [${REFERRAL_REWARD_AMOUNT}]: " "$REFERRAL_REWARD_AMOUNT"

  # ── Firebase Client SDK ──
  header "Firebase Client SDK"
  echo "You can find these values in your Firebase Console → Project Settings → Your apps → Web app."
  echo ""
  prompt_input NEXT_PUBLIC_FIREBASE_API_KEY            "NEXT_PUBLIC_FIREBASE_API_KEY: "
  prompt_input NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN        "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "
  prompt_input NEXT_PUBLIC_FIREBASE_PROJECT_ID         "NEXT_PUBLIC_FIREBASE_PROJECT_ID: "
  prompt_input NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET     "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "
  prompt_input NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "
  prompt_input NEXT_PUBLIC_FIREBASE_APP_ID             "NEXT_PUBLIC_FIREBASE_APP_ID: "
  prompt_input NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID     "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID (optional): "

  # ── Firebase Admin SDK ──
  header "Firebase Admin SDK (Service Account)"
  echo "You can find these in Firebase Console → Project Settings → Service accounts → Generate new private key."
  echo ""
  prompt_input FIREBASE_PROJECT_ID    "FIREBASE_PROJECT_ID: "
  prompt_input FIREBASE_CLIENT_EMAIL  "FIREBASE_CLIENT_EMAIL: "
  echo ""
  echo "FIREBASE_PRIVATE_KEY: paste the full private key including BEGIN/END lines."
  prompt_multiline FIREBASE_PRIVATE_KEY "  Paste private key now:"

  # ── JWT ──
  JWT_SECRET="$(random_string 64)"
  info "Auto-generated JWT secret."

  # ── SSL ──
  header "SSL / HTTPS (optional)"
  prompt_input INSTALL_SSL "Install Let's Encrypt SSL via certbot? (y/n) [n]: " "n"
}

# ── System packages ────────────────────────────────────────────────────────────
install_system_packages() {
  header "Installing System Packages"
  apt-get update -q
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates curl gnupg git rsync \
    nginx \
    postgresql postgresql-contrib \
    build-essential \
    ufw \
    certbot python3-certbot-nginx \
    2>&1 | grep -E '^(Get|Setting|Unpacking|Selecting|Preparing|Processing|E:)' || true
  success "System packages installed."
}

# ── Node.js ────────────────────────────────────────────────────────────────────
install_nodejs() {
  header "Node.js"
  if command_exists node; then
    local major
    major="$(node -v | sed -E 's/^v([0-9]+).*/\1/')"
    if [[ "$major" -ge 20 ]]; then
      success "Node.js $(node -v) already installed."
      return
    fi
    warn "Node.js $major.x found — updating to 20.x."
  fi
  info "Installing Node.js 20.x via NodeSource…"
  mkdir -p /etc/apt/keyrings
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
    | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" \
    > /etc/apt/sources.list.d/nodesource.list
  apt-get update -q
  DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs
  success "Node.js $(node -v) installed."
}

# ── PM2 ────────────────────────────────────────────────────────────────────────
install_pm2() {
  header "PM2"
  if command_exists pm2; then
    success "PM2 $(pm2 --version) already installed."
  else
    npm install -g pm2
    success "PM2 installed."
  fi
}

# ── Directory setup ────────────────────────────────────────────────────────────
setup_directories() {
  header "Directories"
  mkdir -p "$APP_DIR" "$LOG_DIR"
  chown -R "${RUN_USER}:${RUN_GROUP}" "$APP_DIR" "$LOG_DIR"
  success "Directories ready: ${APP_DIR}  ${LOG_DIR}"
}

# ── Copy project files ─────────────────────────────────────────────────────────
copy_project_files() {
  header "Syncing Project Files → ${APP_DIR}"
  local source_dir
  source_dir="$(cd "$(dirname "$0")/.." && pwd)"
  rsync -a --delete \
    --exclude '.git' \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '*.log' \
    --exclude '.env' \
    --exclude '.env.*' \
    "${source_dir}/" "${APP_DIR}/"
  chown -R "${RUN_USER}:${RUN_GROUP}" "$APP_DIR"
  success "Project files synced."
}

# ── PostgreSQL ─────────────────────────────────────────────────────────────────
setup_postgres() {
  header "PostgreSQL Setup"
  systemctl enable postgresql --now

  local esc_pw
  esc_pw="$(sql_escape "$DB_PASSWORD")"

  # Create role if not exists
  if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='${DB_USER}'" | grep -q 1; then
    sudo -u postgres psql -c "CREATE USER ${DB_USER} WITH ENCRYPTED PASSWORD '${esc_pw}';"
    success "PostgreSQL user '${DB_USER}' created."
  else
    sudo -u postgres psql -c "ALTER USER ${DB_USER} WITH ENCRYPTED PASSWORD '${esc_pw}';"
    success "PostgreSQL user '${DB_USER}' already exists — password updated."
  fi

  # Create database if not exists
  if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1; then
    sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};"
    success "Database '${DB_NAME}' created."
  else
    success "Database '${DB_NAME}' already exists."
  fi

  sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};"

  # Ensure pg_hba.conf allows password auth from localhost
  local hba_file
  hba_file="$(sudo -u postgres psql -tAc "SHOW hba_file")"
  if grep -qE "^host\s+all\s+all\s+127\.0\.0\.1/32\s+md5" "$hba_file" 2>/dev/null; then
    : # already configured
  else
    echo "host    all             all             127.0.0.1/32            md5" >> "$hba_file"
    systemctl reload postgresql
    success "pg_hba.conf updated for md5 auth."
  fi
}

# ── Write .env.production ──────────────────────────────────────────────────────
write_env_file() {
  header ".env.production"
  local db_url="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"

  # Escape FIREBASE_PRIVATE_KEY for the env file (replace literal newlines with \n)
  local escaped_pk
  escaped_pk="${FIREBASE_PRIVATE_KEY//$'\n'/\\n}"

  cat > "$ENV_FILE" <<EOF
# ── Application ────────────────────────────────────────────────────────────────
NODE_ENV=production
PORT=${APP_PORT}
JWT_SECRET=${JWT_SECRET}

# ── Database ───────────────────────────────────────────────────────────────────
DATABASE_URL=${db_url}

# ── Admin Seed ──────────────────────────────────────────────────────────────────
ADMIN_PHONE=${ADMIN_PHONE}
ADMIN_PASSWORD=${ADMIN_PASSWORD}
ADMIN_NAME=${ADMIN_NAME}
REFERRAL_REWARD_AMOUNT=${REFERRAL_REWARD_AMOUNT}

# ── Firebase Client SDK ─────────────────────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=${NEXT_PUBLIC_FIREBASE_API_KEY}
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}
NEXT_PUBLIC_FIREBASE_PROJECT_ID=${NEXT_PUBLIC_FIREBASE_PROJECT_ID}
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}
NEXT_PUBLIC_FIREBASE_APP_ID=${NEXT_PUBLIC_FIREBASE_APP_ID}
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=${NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}

# ── Firebase Admin SDK ──────────────────────────────────────────────────────────
FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}
FIREBASE_CLIENT_EMAIL=${FIREBASE_CLIENT_EMAIL}
FIREBASE_PRIVATE_KEY="${escaped_pk}"
EOF

  chown "${RUN_USER}:${RUN_GROUP}" "$ENV_FILE"
  chmod 600 "$ENV_FILE"
  success "Written: ${ENV_FILE}  (mode 600)"
}

# ── Node dependencies, Prisma, seed, build ─────────────────────────────────────
install_and_build() {
  header "npm install"
  sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && npm ci --prefer-offline" \
    || sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && npm install"
  success "Dependencies installed."

  header "Prisma: generate"
  sudo -u "$RUN_USER" bash -lc "cd '${APP_DIR}' && npx prisma generate --schema=prisma/schema.prisma"
  success "Prisma client generated."

  header "Prisma: migrate deploy"
  sudo -u "$RUN_USER" bash -lc \
    "cd '${APP_DIR}' && set -a && . '${ENV_FILE}' && set +a && npx prisma migrate deploy --schema=prisma/schema.prisma"
  success "Database migrations applied."

  header "Database Seed"
  sudo -u "$RUN_USER" bash -lc \
    "cd '${APP_DIR}' && set -a && . '${ENV_FILE}' && set +a && ENV_FILE='${ENV_FILE}' node scripts/seed-production.js"
  success "Database seeded."

  header "Next.js: build"
  sudo -u "$RUN_USER" bash -lc \
    "cd '${APP_DIR}' && set -a && . '${ENV_FILE}' && set +a && npm run build"
  success "Next.js production build complete."
}

# ── PM2 ────────────────────────────────────────────────────────────────────────
configure_pm2() {
  header "PM2 Process"

  # Write ecosystem config
  cat > "${APP_DIR}/ecosystem.config.js" <<JSEOF
module.exports = {
  apps: [{
    name: '${APP_NAME}',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '${APP_DIR}',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_file: '${ENV_FILE}',
    out_file: '${LOG_DIR}/out.log',
    error_file: '${LOG_DIR}/error.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
};
JSEOF
  chown "${RUN_USER}:${RUN_GROUP}" "${APP_DIR}/ecosystem.config.js"

  # Stop any existing process
  sudo -u "$RUN_USER" bash -lc "pm2 delete '${APP_NAME}' 2>/dev/null || true"

  # Start
  sudo -u "$RUN_USER" bash -lc \
    "cd '${APP_DIR}' && set -a && . '${ENV_FILE}' && set +a && pm2 start ecosystem.config.js"
  sudo -u "$RUN_USER" bash -lc "pm2 save"

  # Enable systemd startup
  local startup_cmd
  startup_cmd="$(pm2 startup systemd -u "$RUN_USER" --hp "$RUN_HOME" 2>/dev/null | grep 'sudo' || true)"
  if [[ -n "$startup_cmd" ]]; then
    eval "$startup_cmd" || true
  fi

  systemctl enable "pm2-${RUN_USER}" 2>/dev/null || true
  success "PM2 process '${APP_NAME}' started and saved."
}

# ── Nginx ──────────────────────────────────────────────────────────────────────
configure_nginx() {
  header "Nginx"

  cat > "$NGINX_CONF" <<NGEOF
# onrpy – generated by install-vps.sh
# HTTP block – redirect to HTTPS (active after SSL is configured)
server {
    listen 80;
    server_name ${DOMAIN_OR_IP};

    # ACME challenge (used by certbot)
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        # Once SSL is installed, uncomment next line and remove the proxy block.
        # return 301 https://\$host\$request_uri;

        # Pre-SSL: proxy directly
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 60s;
    }
}

# HTTPS block – uncomment after certbot has installed certs
# server {
#     listen 443 ssl http2;
#     server_name ${DOMAIN_OR_IP};
#
#     ssl_certificate     /etc/letsencrypt/live/${DOMAIN_OR_IP}/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/${DOMAIN_OR_IP}/privkey.pem;
#     include             /etc/letsencrypt/options-ssl-nginx.conf;
#     ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;
#
#     gzip on;
#     gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
#
#     add_header X-Frame-Options "SAMEORIGIN" always;
#     add_header X-XSS-Protection "1; mode=block" always;
#     add_header X-Content-Type-Options "nosniff" always;
#     add_header Referrer-Policy "no-referrer-when-downgrade" always;
#
#     location /_next/static/ {
#         alias /opt/onrpy/.next/static/;
#         expires 365d;
#         add_header Cache-Control "public, immutable";
#     }
#
#     location / {
#         proxy_pass http://127.0.0.1:${APP_PORT};
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade \$http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host \$host;
#         proxy_set_header X-Real-IP \$remote_addr;
#         proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto \$scheme;
#         proxy_cache_bypass \$http_upgrade;
#         proxy_read_timeout 60s;
#     }
# }
NGEOF

  ln -sf "$NGINX_CONF" "$NGINX_ENABLED"
  rm -f /etc/nginx/sites-enabled/default

  nginx -t
  systemctl enable nginx
  systemctl restart nginx
  success "Nginx configured and restarted."
}

# ── UFW firewall ───────────────────────────────────────────────────────────────
configure_ufw() {
  header "UFW Firewall"
  ufw allow OpenSSH
  ufw allow 'Nginx Full'
  ufw --force enable
  success "UFW enabled: SSH + Nginx Full (80 + 443) allowed."
}

# ── Optional SSL ───────────────────────────────────────────────────────────────
install_ssl() {
  if [[ "${INSTALL_SSL,,}" =~ ^y ]]; then
    header "Let's Encrypt SSL"
    certbot --nginx -d "$DOMAIN_OR_IP" --non-interactive --agree-tos \
      --email "admin@${DOMAIN_OR_IP}" --redirect || \
      warn "certbot failed. You can run it manually: sudo certbot --nginx -d ${DOMAIN_OR_IP}"
    success "SSL certificate installed."
  else
    info "SSL skipped. Run 'sudo certbot --nginx -d ${DOMAIN_OR_IP}' later."
  fi
}

# ── Health check ───────────────────────────────────────────────────────────────
health_check() {
  header "Health Checks"
  sleep 3

  if systemctl is-active --quiet nginx; then
    success "Nginx is running."
  else
    warn "Nginx is NOT running. Check: systemctl status nginx"
  fi

  if sudo -u "$RUN_USER" bash -lc "pm2 list | grep -q '${APP_NAME}'"; then
    success "PM2 process '${APP_NAME}' is running."
  else
    warn "PM2 process '${APP_NAME}' not found in pm2 list."
  fi

  if curl -sf "http://127.0.0.1:${APP_PORT}" >/dev/null; then
    success "App is responding on port ${APP_PORT}."
  else
    warn "App not responding yet on port ${APP_PORT}. It may still be starting."
  fi
}

# ── Summary ────────────────────────────────────────────────────────────────────
print_summary() {
  echo ""
  echo -e "${BOLD}${GREEN}════════════════════════════════════════════════════${RESET}"
  echo -e "${BOLD}${GREEN}  ✓  onrpy Installation Complete!${RESET}"
  echo -e "${BOLD}${GREEN}════════════════════════════════════════════════════${RESET}"
  echo ""
  echo -e "  ${BOLD}App URL:${RESET}       http://${DOMAIN_OR_IP}"
  echo -e "  ${BOLD}App Dir:${RESET}       ${APP_DIR}"
  echo -e "  ${BOLD}Env File:${RESET}      ${ENV_FILE}  (chmod 600)"
  echo -e "  ${BOLD}Logs:${RESET}          ${LOG_DIR}/"
  echo -e "  ${BOLD}PM2 App:${RESET}       pm2 status"
  echo ""
  echo -e "  ${BOLD}Admin Phone:${RESET}   ${ADMIN_PHONE}"
  echo -e "  ${BOLD}DB Name:${RESET}       ${DB_NAME}"
  echo -e "  ${BOLD}DB User:${RESET}       ${DB_USER}"
  echo ""
  echo -e "  ${BOLD}Useful Commands:${RESET}"
  echo -e "    pm2 status"
  echo -e "    pm2 logs ${APP_NAME}"
  echo -e "    pm2 restart ${APP_NAME}"
  echo -e "    sudo systemctl status nginx"
  echo ""
  echo -e "  ${BOLD}Update & Redeploy:${RESET}"
  echo -e "    cd ${APP_DIR} && git pull && npm ci && npx prisma migrate deploy"
  echo -e "    npm run build && pm2 reload ${APP_NAME}"
  echo ""
  echo -e "  ${BOLD}Add SSL later:${RESET}"
  echo -e "    sudo certbot --nginx -d ${DOMAIN_OR_IP}"
  echo ""
  echo -e "${BOLD}${GREEN}════════════════════════════════════════════════════${RESET}"
}

# ── Main ───────────────────────────────────────────────────────────────────────
main() {
  collect_inputs
  install_system_packages
  install_nodejs
  install_pm2
  setup_directories
  copy_project_files
  setup_postgres
  write_env_file
  install_and_build
  configure_pm2
  configure_nginx
  configure_ufw
  install_ssl
  health_check
  print_summary
}

main "$@"
