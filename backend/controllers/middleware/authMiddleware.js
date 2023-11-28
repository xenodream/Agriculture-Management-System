const db = require("../../DBconnection.js");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const text = "SELECT * FROM users WHERE id=$1";
      const values = [decodedToken.id];
      const response = await db.pool.query(text, values);
      console.log(response);
      const filteredData = response.rows[0];
      req.user = filteredData;
      next();
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(401).json("Nie ma tokena");
  }
};

module.exports = userAuth;
