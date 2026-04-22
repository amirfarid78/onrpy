#!/bin/bash

# Zeva - One Rupee Game
# Single Click Deployment Script for DigitalOcean Droplet / Ubuntu VPS
# Domain: onerupeegame.com

# Exit script if any command fails
set -e

# Ensure script is run as root
if [ "$EUID" -ne 0 ]; then 
  echo "Please run as root (e.g. sudo ./deploy.sh)"
  exit 1
fi

DOMAIN="onerupeegame.com"
APP_DIR="/var/www/zeva"
NODE_VERSION="20"

echo "=============================================="
echo "    Deploying Zeva - One Rupee Game           "
echo "=============================================="

# 1. Update and install dependencies
echo ">>> Updating OS and installing dependencies..."
apt-get update && apt-get upgrade -y
apt-get install -y curl git certbot python3-certbot-nginx nginx

# 2. Install Node.js & NPM & PM2
echo ">>> Installing Node.js v$NODE_VERSION..."
curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash -
apt-get install -y nodejs
npm install -g pm2 yarn

# 3. Securely setup .env variables
echo "=============================================="
echo "    Environment Configuration                 "
echo "=============================================="
echo "Please enter your Supabase / PostgreSQL Database URL:"
read -p "DATABASE_URL: " DB_URL

echo -e "\nPlease enter your Supabase DIRECT_URL:"
read -p "DIRECT_URL: " DIRECT_URL

echo -e "\nPlease enter a 32-character JWT Secret (or press enter to auto-generate):"
read -p "JWT_SECRET: " JWT_SECRET

if [ -z "$JWT_SECRET" ]; then
    JWT_SECRET=$(openssl rand -base64 32)
    echo "Generated JWT_SECRET: $JWT_SECRET"
fi

# 4. Clone / Setup Application Directory
echo ">>> Setting up application directory..."
mkdir -p $APP_DIR
# Assuming the code is currently in the same folder where the script is run, or clone from Git.
# If copying current code:
cp -r ./* $APP_DIR/ || true
cd $APP_DIR

# Write .env file
echo ">>> Writing .env file..."
cat <<EOF > .env
DATABASE_URL="$DB_URL"
DIRECT_URL="$DIRECT_URL"
JWT_SECRET="$JWT_SECRET"
PORT=3000
NODE_ENV=production
EOF

# 5. Build the Next.js app
echo ">>> Installing Node modules and building..."
npm install
npx prisma generate
npx prisma db push
npm run build

# 6. PM2 Process Manager
echo ">>> Configuring PM2 to manage Next.js..."
pm2 stop zeva || true
pm2 delete zeva || true
pm2 start npm --name "zeva" -- start
pm2 save
pm2 startup | tail -n 1 | bash

# 7. Setup NGINX Reverse Proxy
echo ">>> Configuring Nginx for $DOMAIN..."
cat <<EOF > /etc/nginx/sites-available/zeva
server {
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
EOF

ln -sf /etc/nginx/sites-available/zeva /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx

# 8. Setup SSL with Certbot Let's Encrypt
echo ">>> Generating Let's Encrypt SSL Certificate..."
echo "(Make sure your domain's A record points to this droplet's IP!)"
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN --redirect || echo "WARNING: SSL generation failed. Ensure your domain points to this IP."

echo "=============================================="
echo " Deployment Complete!                         "
echo " Your platform should now be live at:         "
echo " https://$DOMAIN                              "
echo " ============================================="
