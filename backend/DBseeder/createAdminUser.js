const db = require("../DBconnection.js");
const bcrypt = require("bcrypt");
const createAdmin = async () => {
  try {
    const text =
      "INSERT INTO users(id,name,surname,password,salary_coefficient) VALUES('15','Admin','Admin',$1,'0');";
    const values = [await bcrypt.hash("admin", 10)];
    await db.pool.query(text, values);
    db.pool.end();
  } catch (err) {
    console.log(err);
  }
};

createAdmin();
