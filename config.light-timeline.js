module.exports = {
  database: {
    host: "postgres",
    port: '5430',
    database: "timeline",
    user: "postgres",
    password: "e8b50fddddf04ee439f12851f5275222",
    dialect: "postgres"
  },
  polling: {
    limit: 80,
    maxIndexingUnloadedGroup: 3,
  }
}
