const db = require("../DBconnection.js");
try {
  db.pool.query(
    "CREATE TABLE work (id SERIAL PRIMARY KEY, worker_id INTEGER REFERENCES users(id), type_of_work VARCHAR(100),date DATE,yields_weight DECIMAL,salary DECIMAL,work_time INTEGER,work_description TEXT,machine VARCHAR(100))"
  );
  db.pool.end();
} catch (err) {
  console.log(err);
}
