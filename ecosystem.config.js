export default {
  apps: [{
    name: 'mason-sterling-site-francais',
    script: 'vite',
    args: '--host 0.0.0.0 --port 3001',
    cwd: '/home/user/webapp',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3001
    }
  }]
};