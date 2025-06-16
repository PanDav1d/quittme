module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "./apps/backend",
      script: "pnpm",
      args: "run start",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "frontend",
      cwd: "./apps/frontend",
      script: "pnpm",
      args: "run start",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
