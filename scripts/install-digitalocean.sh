#!/usr/bin/env bash

set -Eeuo pipefail

APP_NAME="onrpy"
APP_DIR="/opt/${APP_NAME}"
RUN_USER="${SUDO_USER:-$USER}"

# If installer is launched from a root shell, prefer an explicit app user
# to avoid creating PM2 processes under root accidentally.
if [[ "$RUN_USER" == "root" ]]; then
  if [[ -n "${APP_RUN_USER:-}" ]] && id "$APP_RUN_USER" >/dev/null 2>&1; then
    RUN_USER="$APP_RUN_USER"
  elif id deploy >/dev/null 2>&1; then
    RUN_USER="deploy"
  fi
fi

RUN_GROUP="$(id -gn "$RUN_USER")"
RUN_HOME="$(eval echo "~${RUN_USER}")"
ENV_FILE="${APP_DIR}/.env.production"

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

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run this script with sudo/root."
  exit 1
fi

command_exists() {
  command -v "$1" >/dev/null 2>&1
}

random_string() {
  tr -dc 'A-Za-z0-9_-' </dev/urandom | head -c "${1:-40}"
}

validate_pg_identifier() {
  local value="$1"
  local label="$2"
  if [[ ! "$value" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
    echo "${label} must match [A-Za-z_][A-Za-z0-9_]*"
    exit 1
  fi
}

sql_escape_literal() {
  local value="$1"
  value="${value//\'/\'\'}"
  printf '%s' "$value"
}

ensure_user() {
  if ! id "$RUN_USER" >/dev/null 2>&1; then
    echo "User ${RUN_USER} does not exist."
    exit 1
  fi
}

prompt_input() {
  local var_name="$1"
  local prompt_text="$2"
  local default_value="${3:-}"
  local secret="${4:-false}"
  local input

  if [[ "$secret" == "true" ]]; then
    read -r -s -p "$prompt_text" input
    echo
  else
    read -r -p "$prompt_text" input
  fi

  if [[ -z "$input" ]]; then
    input="$default_value"
  fi

  printf -v "$var_name" '%s' "$input"
}

load_env_example_defaults() {
  local source_env
  source_env="$(cd "$(dirname "$0")/.." && pwd)/env.example"

  if [[ -f "$source_env" ]]; then
    set -a
    # shellcheck disable=SC1090
    . "$source_env"
    set +a
  fi
}

install_system_packages() {
  echo "Installing system packages..."
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    nginx \
    postgresql \
    postgresql-contrib \
    build-essential
}

install_nodejs() {
  if command_exists node; then
    local major
    major="$(node -v | sed -E 's/^v([0-9]+).*/\1/')"
    if [[ "$major" -ge 20 ]]; then
      echo "Node.js $(node -v) already installed"
      return
    fi
  fi

  echo "Installing Node.js 20.x..."
  mkdir -p /etc/apt/keyrings
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" >/etc/apt/sources.list.d/nodesource.list
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs
}

install_pm2() {
  if command_exists pm2; then
    echo "PM2 already installed"
    return
  fi

  echo "Installing PM2 globally..."
  npm install -g pm2
}

setup_directories() {
  mkdir -p "$APP_DIR"
  chown -R "$RUN_USER:$RUN_GROUP" "$APP_DIR"
}

copy_project_files() {
  local source_dir
  source_dir="$(cd "$(dirname "$0")/.." && pwd)"
  echo "Syncing project files to ${APP_DIR}..."

  rsync -a --delete \
    --exclude ".git" \
    --exclude "node_modules" \
    --exclude ".next" \
    --exclude "*.log" \
    "${source_dir}/" "${APP_DIR}/"

  chown -R "$RUN_USER:$RUN_GROUP" "$APP_DIR"
}

setup_postgres() {
  echo "Configuring PostgreSQL role/database..."

  local escaped_db_password
  escaped_db_password="$(sql_escape_literal "$DB_PASSWORD")"

  sudo -u postgres psql -tc "SELECT 1 FROM pg_roles WHERE rolname='${DB_USER}'" | grep -q 1 || \
    sudo -u postgres psql -c "CREATE USER ${DB_USER} WITH ENCRYPTED PASSWORD '${escaped_db_password}';"

  sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1 || \
    sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};"

  sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};"
}

write_env_file() {
  local database_url
  database_url="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"

  cat >"$ENV_FILE" <<EOF
NODE_ENV=production
PORT=${APP_PORT}
DATABASE_URL=${database_url}
JWT_SECRET=${JWT_SECRET}

# Admin seed
ADMIN_PHONE=${ADMIN_PHONE}
ADMIN_PASSWORD=${ADMIN_PASSWORD}
ADMIN_NAME=${ADMIN_NAME}
REFERRAL_REWARD_AMOUNT=${REFERRAL_REWARD_AMOUNT}

# Firebase client config
NEXT_PUBLIC_FIREBASE_API_KEY=${NEXT_PUBLIC_FIREBASE_API_KEY:-replace-me}
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:-replace-me}
NEXT_PUBLIC_FIREBASE_PROJECT_ID=${NEXT_PUBLIC_FIREBASE_PROJECT_ID:-replace-me}
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:-replace-me}
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:-replace-me}
NEXT_PUBLIC_FIREBASE_APP_ID=${NEXT_PUBLIC_FIREBASE_APP_ID:-replace-me}
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=${NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:-replace-me}

# Firebase admin service account config
FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID:-replace-me}
FIREBASE_CLIENT_EMAIL=${FIREBASE_CLIENT_EMAIL:-replace-me}
FIREBASE_PRIVATE_KEY=${FIREBASE_PRIVATE_KEY:-replace-me}
EOF

  chown "$RUN_USER:$RUN_GROUP" "$ENV_FILE"
  chmod 600 "$ENV_FILE"
}

install_dependencies_and_build() {
  echo "Installing Node dependencies..."
  sudo -u "$RUN_USER" bash -lc "cd '$APP_DIR' && npm install"

  echo "Generating Prisma client..."
  sudo -u "$RUN_USER" bash -lc "cd '$APP_DIR' && export ENV_FILE='$ENV_FILE' && npx prisma generate --schema=prisma/schema.prisma"

  echo "Running Prisma migrations..."
  sudo -u "$RUN_USER" bash -lc "cd '$APP_DIR' && set -a && . '$ENV_FILE' && set +a && npx prisma migrate deploy --schema=prisma/schema.prisma"

  echo "Running production seed..."
  sudo -u "$RUN_USER" bash -lc "cd '$APP_DIR' && export ENV_FILE='$ENV_FILE' && set -a && . '$ENV_FILE' && set +a && node scripts/seed-production.js"

  echo "Building Next.js app..."
  sudo -u "$RUN_USER" bash -lc "cd '$APP_DIR' && set -a && . '$ENV_FILE' && set +a && npm run build"
}

configure_pm2() {
  echo "Configuring PM2 process..."

  sudo -u "$RUN_USER" bash -lc "cd '$APP_DIR' && set -a && . '$ENV_FILE' && set +a && pm2 delete '$APP_NAME' >/dev/null 2>&1 || true"

  sudo -u "$RUN_USER" bash -lc "cd '$APP_DIR' && set -a && . '$ENV_FILE' && set +a && pm2 start npm --name '$APP_NAME' -- start"
  sudo -u "$RUN_USER" bash -lc "pm2 save"

  pm2 startup systemd -u "$RUN_USER" --hp "$RUN_HOME" >/dev/null
}

configure_nginx() {
  echo "Configuring Nginx reverse proxy..."

  cat >/etc/nginx/sites-available/${APP_NAME} <<EOF
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
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

  ln -sf /etc/nginx/sites-available/${APP_NAME} /etc/nginx/sites-enabled/${APP_NAME}
  rm -f /etc/nginx/sites-enabled/default

  nginx -t
  systemctl restart nginx
  systemctl enable nginx
}

final_checks() {
  echo "Running health checks..."
  sleep 2
  if ! systemctl is-active --quiet nginx; then
    echo "Nginx is not active."
    exit 1
  fi

  if ! sudo -u "$RUN_USER" bash -lc "pm2 status | grep -q '$APP_NAME'"; then
    echo "PM2 app is not running."
    exit 1
  fi

  echo "Installation completed successfully"
  echo "App: http://${DOMAIN_OR_IP}"
  echo "Admin phone: ${ADMIN_PHONE}"
  echo "Env file: ${ENV_FILE}"
  echo "Next step: replace Firebase values in ${ENV_FILE}, then run: sudo -u ${RUN_USER} pm2 restart ${APP_NAME}"
}

collect_inputs() {
  echo "---- onrpy DigitalOcean Installer ----"

  prompt_input DOMAIN_OR_IP "Domain or droplet public IP: "
  if [[ -z "$DOMAIN_OR_IP" ]]; then
    echo "Domain/IP is required"
    exit 1
  fi

  prompt_input DB_NAME "PostgreSQL database name [${DB_NAME}]: " "$DB_NAME"
  prompt_input DB_USER "PostgreSQL username [${DB_USER}]: " "$DB_USER"
  prompt_input DB_PASSWORD "PostgreSQL password [auto-generate if blank]: " "" true
  if [[ -z "$DB_PASSWORD" ]]; then
    DB_PASSWORD="$(random_string 28)"
  fi

  validate_pg_identifier "$DB_NAME" "Database name"
  validate_pg_identifier "$DB_USER" "Database user"

  prompt_input APP_PORT "Application port [${APP_PORT}]: " "$APP_PORT"

  prompt_input ADMIN_PHONE "Admin phone [${ADMIN_PHONE}]: " "$ADMIN_PHONE"
  prompt_input ADMIN_PASSWORD "Admin password (min 8 chars): " "" true
  if [[ -z "$ADMIN_PASSWORD" || ${#ADMIN_PASSWORD} -lt 8 ]]; then
    echo "Admin password must be at least 8 characters"
    exit 1
  fi

  prompt_input ADMIN_NAME "Admin name [${ADMIN_NAME}]: " "$ADMIN_NAME"
  prompt_input REFERRAL_REWARD_AMOUNT "Referral reward amount [${REFERRAL_REWARD_AMOUNT}]: " "$REFERRAL_REWARD_AMOUNT"

  JWT_SECRET="$(random_string 64)"
}

main() {
  ensure_user
  load_env_example_defaults
  collect_inputs
  install_system_packages
  install_nodejs
  install_pm2
  setup_directories
  copy_project_files
  setup_postgres
  write_env_file
  install_dependencies_and_build
  configure_pm2
  configure_nginx
  final_checks
}

main "$@"
