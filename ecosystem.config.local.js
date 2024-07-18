module.exports = {
  apps: [
    {
      name: "user-service",
      script: "./build/server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
