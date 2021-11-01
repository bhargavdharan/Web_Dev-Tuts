const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "mypassword",
  database: "TestDB",
});

module.exports = client;