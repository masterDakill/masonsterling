export default {
  apps: [{
    name: 'mason-sterling-updated',
    script: 'vite',
    args: '--host 0.0.0.0 --port 3000',
    cwd: '/home/user/masonsterling-new',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    }
  }]
};