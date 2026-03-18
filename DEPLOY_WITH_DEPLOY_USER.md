# Deploy on DigitalOcean (Using Existing deploy User)

This guide assumes:

- Your droplet is already created.
- A sudo user named `deploy` already exists.
- DNS (optional) points your domain to the droplet IP.
- You are deploying this repository: `amirfarid78/onrpy`.

## 1) SSH into Droplet as deploy

```bash
ssh deploy@YOUR_DROPLET_IP
```

Confirm sudo access:

```bash
sudo -v
```

## 2) Clone Repository

```bash
cd /home/deploy
git clone https://github.com/amirfarid78/onrpy.git
cd onrpy
```

If already cloned:

```bash
cd /home/deploy/onrpy
git pull origin main
```

## 3) Run One-Step Installer

The installer will:

- Install Node.js, PostgreSQL, Nginx, PM2
- Create PostgreSQL DB/user
- Generate `/opt/onrpy/.env.production`
- Run Prisma migrations
- Seed production data (admin user, referral settings, initial pools)
- Build and start app with PM2
- Configure Nginx reverse proxy

Run:

```bash
chmod +x scripts/install-digitalocean.sh
sudo bash scripts/install-digitalocean.sh
```

Installer prompts you for:

1. Domain or droplet public IP
2. PostgreSQL database name
3. PostgreSQL username
4. PostgreSQL password (blank = auto-generate)
5. App port (default 3000)
6. Admin phone
7. Admin password (min 8 chars)
8. Admin name
9. Referral reward amount

## 4) Verify Services After Install

```bash
sudo systemctl status nginx --no-pager
sudo -u deploy pm2 status
curl -I https://onerupeegame.com
```

Check PM2 logs:

```bash
sudo -u deploy pm2 logs onrpy --lines 150
```

## 5) Verify Database and Seed Result

```bash
cd /opt/onrpy
set -a
. .env.production
set +a
node test-db.js
```

Optional SQL checks:

```bash
sudo -u postgres psql
```

Inside `psql`:

```sql
\c onrpy
\dt
select count(*) from "User";
select count(*) from "LotteryPool";
select count(*) from "ReferralSetting";
\q
```

## 6) Configure HTTPS (Recommended)

Only if you are using a real domain:

```bash
sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d onerupeegame.com -d www.onerupeegame.com
sudo certbot renew --dry-run
```

For a dedicated SSL-only walkthrough, use:

- `SSL_SETUP_DOMAIN.md`

## 7) Day-2 Operations

Restart app:

```bash
sudo -u deploy pm2 restart onrpy
```

Reload app:

```bash
sudo -u deploy pm2 reload onrpy
```

Save PM2 process list:

```bash
sudo -u deploy pm2 save
```

Nginx config test:

```bash
sudo nginx -t
```

## 8) Deploy Future Updates

```bash
cd /home/deploy/onrpy
git pull origin main
sudo bash scripts/install-digitalocean.sh
```

The installer is idempotent, so re-running is safe.

## 9) Important Security Actions

1. Rotate Firebase admin private key if exposed in any public/shared repo.
2. Keep `/opt/onrpy/.env.production` permissions strict (`chmod 600`).
3. Use strong admin and DB passwords.
4. Keep system packages updated regularly.
