module.exports = {
  apps: [
    {
      name: "service1",
      script: "./service1.js",
      watch: true,
      ignore_watch : ["node_modules"],
      watch: true,
    },
    {
      name: "service2",
      script: "./service2.js",
      watch: true,
      ignore_watch : ["node_modules"],
      watch: true,
    },
    {
      name: "gateway",
      script: "./gateway.js",
      watch: true,
      ignore_watch : ["node_modules"],
      watch: true,
    },
  ]
}
