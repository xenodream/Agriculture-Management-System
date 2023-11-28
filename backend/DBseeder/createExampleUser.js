const db = require("../DBconnection.js");
const bcrypt = require("bcrypt");
const createUser = async () => {
  try {
    const text =
      "INSERT INTO users(id,name,surname,password,salary_coefficient) VALUES('1','First','User',$1,'0.4');";
    const values = [await bcrypt.hash("12345", 10)];
    await db.pool.query(text, values);
    db.pool.end();
  } catch (err) {
    console.log(err);
  }
};

createUser();
