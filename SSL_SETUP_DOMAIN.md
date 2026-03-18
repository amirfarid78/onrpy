# SSL Setup Guide (Nginx + Let's Encrypt)

Use this guide after your app is already running on HTTP via Nginx.

## 1) Set domain variables

Run as deploy user:

```bash
export DOMAIN="yourdomain.com"
export WWW_DOMAIN="www.yourdomain.com"
```

If you do not use `www`, skip `WWW_DOMAIN` in the certbot command later.

## 2) Verify DNS is pointed to your droplet

```bash
dig +short A "$DOMAIN"
dig +short A "$WWW_DOMAIN"
curl -I "http://$DOMAIN"
```

Expected result:

- `dig` returns your droplet public IP.
- HTTP request returns a response from your server (200/301/302 are okay).

## 3) Ensure Nginx is healthy before issuing cert

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
```

## 4) Install Certbot

```bash
sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx
```

## 5) Issue SSL certificate

For root + www:

```bash
sudo certbot --nginx -d "$DOMAIN" -d "$WWW_DOMAIN"
```

For root only:

```bash
sudo certbot --nginx -d "$DOMAIN"
```

During prompts, choose:

1. Provide valid email
2. Agree to terms
3. Choose redirect option (HTTP -> HTTPS)

## 6) Verify HTTPS

```bash
curl -I "https://$DOMAIN"
curl -I "https://$WWW_DOMAIN"
```

Also test in browser:

- https://yourdomain.com
- https://www.yourdomain.com

## 7) Verify auto-renewal

```bash
sudo certbot renew --dry-run
systemctl list-timers | grep certbot
```

## 8) Optional hardening checks

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Check TLS grade:

- https://www.ssllabs.com/ssltest/

## 9) Common errors and fixes

### Error: unauthorized / failed challenge

Cause: DNS not pointing to droplet or Nginx config mismatch.

Fix:

```bash
dig +short A "$DOMAIN"
sudo nginx -t
sudo systemctl restart nginx
```

### Error: connection timeout

Cause: firewall blocks 80/443.

Fix:

```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw status
```

### Error: too many certificates already issued

Cause: Let's Encrypt rate limit.

Fix:

Use staging first when testing repeatedly:

```bash
sudo certbot --staging --nginx -d "$DOMAIN" -d "$WWW_DOMAIN"
```
