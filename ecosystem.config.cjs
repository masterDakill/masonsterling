module.exports = {
  apps: [{
    name: 'mason-sterling-multiverse-audio',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3001,
      VITE_HOST: '0.0.0.0'
    }
  }]
};