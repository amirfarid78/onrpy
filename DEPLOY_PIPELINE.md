# onrpy – VPS Deployment & CI/CD Pipeline Guide

This document covers deploying onrpy on any Ubuntu 22.04/24.04 VPS **from scratch** and
setting up an automated GitHub Actions pipeline for push-to-deploy.

---

## Prerequisites

| Requirement | Detail |
|---|---|
| VPS OS | Ubuntu 22.04 LTS or 24.04 LTS |
| RAM | ≥ 2 GB recommended |
| Open ports | 22 (SSH), 80 (HTTP), 443 (HTTPS) |
| DNS (optional) | A-record pointing to VPS IP |
| GitHub repo | Project pushed to GitHub |

---

## Part 1 – First-Time VPS Installation

### Step 1: Upload or clone the project on the VPS

```bash
# Option A – via Git
cd /root
git clone https://github.com/YOUR_ORG/onrpy.git onrpy-src
cd onrpy-src

# Option B – via scp from your machine
scp -r ./onrpy-main root@YOUR_VPS_IP:/root/onrpy-src
```

### Step 2: Run the installer

```bash
cd /root/onrpy-src
chmod +x scripts/install-vps.sh
sudo bash scripts/install-vps.sh
```

The installer will prompt you for **every credential** in this order:

| Prompt | Description |
|---|---|
| Domain / IP | Your domain name or raw VPS IP |
| App port | Default `3000` |
| DB name | Default `onrpy` |
| DB user | Default `onrpy_user` |
| DB password | Auto-generated if left blank |
| Admin phone | E.g. `+923001234567` |
| Admin password | Min 8 characters |
| Admin name | Display name |
| Referral reward | Default `50` (PKR) |
| Firebase Client SDK | 7 values from Firebase Console → Web App |
| Firebase Admin SDK | Project ID, Client Email, Private Key |

> **JWT_SECRET** is auto-generated (64-char random string).

### What the installer sets up

1. System packages: `nginx`, `postgresql`, `nodejs 20`, `pm2`, `certbot`, `ufw`, `git`, `rsync`
2. PostgreSQL role + database + grants
3. `/opt/onrpy/.env.production` (chmod 600)
4. `npm ci` → `prisma generate` → `prisma migrate deploy`
5. Production seed: admin user + wallet + referral settings + 15 initial lottery pools
6. `npm run build`
7. PM2 process (`ecosystem.config.js`) + systemd startup
8. Nginx reverse proxy (HTTP, with commented HTTPS block)
9. UFW: allow 22, 80, 443
10. Optional: Let's Encrypt SSL via certbot

---

## Part 2 – CI/CD Pipeline (GitHub Actions)

### Required GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions** → add:

| Secret | Value |
|---|---|
| `VPS_HOST` | Your VPS IP or domain |
| `VPS_USER` | SSH user (e.g. `deploy` or `root`) |
| `VPS_SSH_KEY` | Contents of your **private** SSH key |
| `VPS_PORT` | SSH port (usually `22`) |

### How it works

File: `.github/workflows/deploy.yml`

```
Push to main
    └─► Job: build
            ├── npm ci
            ├── eslint
            ├── tsc --noEmit
            └── npm run build
                └─► Job: deploy (needs: build)
                        ├── rsync project → VPS /opt/onrpy/
                        ├── npm ci
                        ├── prisma migrate deploy
                        ├── seed-production.js (idempotent)
                        ├── npm run build
                        ├── pm2 reload onrpy --update-env
                        └── HTTP smoke test
```

### Setting up SSH access for CI

On your **local machine** (or the server):

```bash
# Generate a dedicated CI deploy key
ssh-keygen -t ed25519 -C "github-actions-onrpy" -f ~/.ssh/onrpy_deploy

# Copy public key to VPS
ssh-copy-id -i ~/.ssh/onrpy_deploy.pub YOUR_VPS_USER@YOUR_VPS_IP

# Copy the private key content and add to GitHub secret VPS_SSH_KEY
cat ~/.ssh/onrpy_deploy
```

### First deploy via pipeline

1. Push code to `main`:
   ```bash
   git add .
   git commit -m "feat: initial deployment setup"
   git push origin main
   ```
2. Watch the run at: `https://github.com/YOUR_ORG/onrpy/actions`

---

## Part 3 – SSL (Let's Encrypt)

> Only works with a real domain name. Skip for raw-IP deployments.

```bash
# On the VPS
sudo certbot --nginx -d yourdomain.com

# Auto-renewal (already set up by certbot)
sudo systemctl status certbot.timer
```

After certbot runs, edit `/etc/nginx/sites-available/onrpy`:
- Uncomment the HTTPS server block
- Replace the HTTP `proxy_pass` with `return 301 https://$host$request_uri;`

Then reload:
```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

## Part 4 – Daily Operations

### Application

```bash
# Status
pm2 status
pm2 logs onrpy --lines 50

# Restart
pm2 restart onrpy

# Zero-downtime reload (preserves connections)
pm2 reload onrpy --update-env

# Stop
pm2 stop onrpy
```

### Nginx

```bash
sudo systemctl status nginx
sudo nginx -t          # test config
sudo systemctl reload nginx
```

### Database

```bash
# Open psql as the app user
sudo -u postgres psql -d onrpy

# List users seeded
SELECT phone, role FROM "User";

# Run a migration manually
cd /opt/onrpy
set -a; . .env.production; set +a
npx prisma migrate deploy

# Run seed (safe to re-run – idempotent)
npm run db:seed
```

### Update the app manually (no CI/CD)

```bash
cd /opt/onrpy
git pull
npm ci
npx prisma migrate deploy
npm run build
pm2 reload onrpy --update-env
```

---

## Part 5 – Environment File Reference

Location: `/opt/onrpy/.env.production` (chmod 600)

```
NODE_ENV=production
PORT=3000
JWT_SECRET=<auto-generated>

DATABASE_URL=postgresql://onrpy_user:<password>@127.0.0.1:5432/onrpy?schema=public

ADMIN_PHONE=+923001234567
ADMIN_PASSWORD=<your-admin-password>
ADMIN_NAME=Admin
REFERRAL_REWARD_AMOUNT=50

NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...

FIREBASE_PROJECT_ID=...
FIREBASE_CLIENT_EMAIL=...
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

After editing this file, always reload the app:
```bash
pm2 reload onrpy --update-env
```

---

## Part 6 – Firewall Reference

```bash
sudo ufw status           # view rules
sudo ufw allow 22/tcp     # SSH
sudo ufw allow 80/tcp     # HTTP
sudo ufw allow 443/tcp    # HTTPS
sudo ufw deny <port>      # block a port
sudo ufw reload
```

---

## Useful npm Scripts

| Script | Command |
|---|---|
| `npm run install:vps` | Run the VPS installer |
| `npm run db:migrate` | Apply pending Prisma migrations |
| `npm run db:seed` | Run production seed (idempotent) |
| `npm run db:generate` | Re-generate Prisma client |
| `npm run db:reset` | Wipe DB + re-seed (⚠️ destructive!) |
