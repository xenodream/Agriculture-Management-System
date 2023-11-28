const Pool = require("pg").Pool;

const pool = new Pool({
  user: "admin",
  host: "localhost",
  password: "admin",
  port: 5432,
  database: "farmersoft",
});

module.exports = { pool };
