const db = require("../DBconnection.js");
try {
  db.pool.query(
    "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255),surname VARCHAR(255),password VARCHAR(255),salary_coefficient DECIMAL)"
  );
  db.pool.end();
} catch (err) {
  console.log(err);
}
