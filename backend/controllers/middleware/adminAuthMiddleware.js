const db = require("../../DBconnection.js");
const jwt = require("jsonwebtoken");

const adminAuth = async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedToken.id === 15) {
        const text = "SELECT * FROM users WHERE id=15";
        const response = await db.pool.query(text);
        const filteredData = response.rows[0];
        req.user = filteredData;
        next();
      } else {
        res.status(401).json("Not authorized as admin");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(401).json("Unauthorized");
  }
};

module.exports = adminAuth;
