// PM2 Ecosystem Configuration for onrpy
// Used by: scripts/install-vps.sh and manual start/reload
// Run as deploying user: pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'onrpy',

      // Uses the locally-installed next binary
      script: 'node_modules/.bin/next',
      args: 'start',

      // Production app directory on VPS
      cwd: '/opt/onrpy',

      // Single instance (scale with 'max' for multi-core)
      instances: 1,
      exec_mode: 'fork',

      // Reliability
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',

      // Load all env vars from the production env file
      // (also passed explicitly by install-vps.sh via "set -a . .env.production set +a")
      env_file: '/opt/onrpy/.env.production',

      // Logging
      out_file: '/var/log/onrpy/out.log',
      error_file: '/var/log/onrpy/error.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

      // Kill timeout before force-kill (ms)
      kill_timeout: 5000,

      // Wait before restart after a crash (ms)
      restart_delay: 2000,
    },
  ],
};
