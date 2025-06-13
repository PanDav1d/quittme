module.exports = {
  apps: [
    {
      name: "quittme-frontend",
      cwd: "apps/frontend",
      script: "npm",
      args: "run start"
    },
    {
      name: "quittme-backend",
      cwd: "apps/backend",
      script: "dist/main.js"
    }
  ]
}
