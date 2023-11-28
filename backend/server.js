const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const usersController = require("./controllers/usersController.js");
const workController = require("./controllers/workController.js");
const adminController = require("./controllers/adminController.js");
const db = require("./DBconnection.js");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

//user routes
app.use("/api/users", usersController);

//work routes
app.use("/api/work", workController);

//admin routes
app.use("/api/admin", adminController);

app.get("/", (req, res) => {
  res.send(`Server is running on port ${process.env.PORT}`);
});

app.listen(5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
