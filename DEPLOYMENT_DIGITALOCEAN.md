# DigitalOcean VPS Deployment (PostgreSQL + Seed + Nginx + PM2)

This project now includes an all-in-one installer:

- Script: `scripts/install-digitalocean.sh`
- Purpose: installs system dependencies, configures PostgreSQL, runs Prisma migrations, seeds database, builds app, starts with PM2, and configures Nginx.

## 1) Create a Droplet

- Ubuntu 24.04 LTS
- At least 2 GB RAM recommended
- Open inbound ports: 22, 80 (and 443 later for SSL)

## 2) Upload/Clone Project on Droplet

```bash
cd /root
git clone <your-repo-url> onrpy
cd onrpy
```

## 3) Run Installer

```bash
chmod +x scripts/install-digitalocean.sh
sudo bash scripts/install-digitalocean.sh
```

Installer prompts for:

- Domain or public IP
- PostgreSQL DB name/user/password
- App port
- Admin phone/password/name
- Referral reward amount

## 4) What It Sets Up

- Node.js 20+
- PostgreSQL + database + user
- `.env.production` at `/opt/onrpy/.env.production`
- Prisma generate + `prisma migrate deploy`
- Production seed:
  - referral settings
  - admin user with wallet
  - initial pools (only if no pools exist)
- Next.js production build
- PM2 process named `onrpy`
- Nginx reverse proxy to app port

## 5) Verify Services

```bash
sudo systemctl status nginx --no-pager
sudo -u $USER pm2 status
curl -I http://<your-domain-or-ip>
```

## 6) Update Firebase Credentials

Edit `/opt/onrpy/.env.production` and set real Firebase values:

- `NEXT_PUBLIC_FIREBASE_*`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

Then restart app:

```bash
sudo -u $USER bash -lc 'cd /opt/onrpy && set -a && . .env.production && set +a && pm2 restart onrpy'
```

## 7) Optional: SSL (Let's Encrypt)

```bash
sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d <your-domain>
```

## Re-run Behavior

The installer is safe to run again:

- Reuses existing PostgreSQL role/database
- Replaces app files in `/opt/onrpy`
- Re-applies migrations
- Seed script is idempotent
