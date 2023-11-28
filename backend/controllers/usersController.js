const express = require("express");
const router = express.Router();
const db = require("../DBconnection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userAuth = require("./middleware/authMiddleware.js");
const adminAuth = require("../controllers/middleware/adminAuthMiddleware.js");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

//Create JWT

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

//Register new user
router.post("/register", async (req, res) => {
  const { id, name, surname, password, salary_coefficient } = req.body;
  const text =
    "INSERT INTO users (id,name,surname,password,salary_coefficient) VALUES ($1,$2,$3,$4,$5)";
  const values = [
    id,
    name,
    surname,
    await bcrypt.hash(password, 10),
    salary_coefficient,
  ];
  try {
    const response = await db.pool.query(text, values);
    console.log(response);
    console.log(id);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(200).json(err);
  }
});

//Login user
router.post("/login", async (req, res) => {
  try {
    const { id, name, surname } = req.body;
    const text = "SELECT * FROM users WHERE id = $1 AND name=$2 AND surname=$3";
    const values = [id, name, surname];
    const resposne = await db.pool.query(text, values);
    if (resposne.rowCount == 0) {
      return res.status(401).json("Nieprawidłowe dane");
    } else {
      bcrypt.compare(
        req.body.password,
        resposne.rows[0].password,
        function (err, data) {
          if (err) {
            console.log(err);
          }
          if (data) {
            const token = createToken(resposne.rows[0].id);
            res.cookie("jwt", token, {
              httpOnly: true,
              maxAge: 1000 * 60 * 60 * 24,
            });
            return res.status(200).json({
              id: resposne.rows[0].id,
              name: resposne.rows[0].name,
              surname: resposne.rows[0].surname,
            });
          } else {
            return res.status(401).json("Nieprawidłowe hasło");
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
});

//Get logged user data

router.get("/authUser", userAuth, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/logout", async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json("Logged out successfully");
  } catch (err) {
    console.log(err);
  }
});

//Get all users

router.get("/", async (req, res) => {
  try {
    const text = "SELECT * FROM users";
    const response = await db.pool.query(text);
    if (response.rowCount == 0) {
      return res.status(404).json("Nie znaleziono użytkowników");
    }
    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get user by ID

router.get("/:id", async (req, res) => {
  try {
    const text = "SELECT * FROM users WHERE id=$1";
    const values = [req.params.id];
    const response = await db.pool.query(text, values);
    if (response.rowCount == 0) {
      return res.status(404).json("Nie znaleziono użytkownika");
    }
    return res.status(200).json(response.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
