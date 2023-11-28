const express = require("express");
const router = express.Router();
const db = require("../DBconnection.js");
const userAuth = require("../controllers/middleware/authMiddleware.js");
const adminAuth = require("../controllers/middleware/adminAuthMiddleware.js");

router.post("/saveWork", userAuth, async (req, res) => {
  const { date, typeOfWork, timeOfWork, weight, machine, description } =
    req.body;
  try {
    //
    const workQuery =
      "INSERT INTO work (worker_id,type_of_work,date,yields_weight,salary,work_time,work_description,machine) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);";
    const workValues = [
      req.user.id,
      typeOfWork,
      date,
      weight,
      req.user.salary_coefficient * timeOfWork,
      timeOfWork,
      description,
      machine,
    ];

    const workResponse = await db.pool.query(workQuery, workValues);

    return res.status(200).json(workResponse);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getLatestDays", userAuth, async (req, res) => {
  try {
    const query =
      "SELECT id,date,type_of_work,yields_weight,salary FROM work WHERE worker_id=$1 ORDER BY date DESC LIMIT 3 ";
    const values = [req.user.id];
    const response = await db.pool.query(query, values);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getAllDays", userAuth, async (req, res) => {
  try {
    const query =
      "SELECT id,date,type_of_work,yields_weight,salary FROM work WHERE worker_id=$1 ORDER BY date DESC ";
    const values = [req.user.id];
    const response = await db.pool.query(query, values);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get worker monthly salary (limit by 3 positions)

router.get("/getLatestMonthlySalary", userAuth, async (req, res) => {
  try {
    const query =
      "SELECT DATE_TRUNC('month',date+INTERVAL '1 month') AS date, SUM(salary) AS salary, SUM(work_time)AS worktime FROM work WHERE worker_id=$1 GROUP BY 1 ORDER BY date DESC LIMIT 3";
    const values = [req.user.id];
    const response = await db.pool.query(query, values);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get worker wonthly salary (all data)

router.get("/getMonthlySalary", userAuth, async (req, res) => {
  if (req.user) {
    try {
      //************************ */
      const query =
        "SELECT DATE_TRUNC('month',date+INTERVAL '1 month') AS date,SUM(salary) AS salary, SUM(work_time)AS worktime FROM work WHERE worker_id=$1 GROUP BY 1 ORDER BY date DESC;";
      const values = [req.user.id];
      const response = await db.pool.query(query, values);
      res.status(200).json(response.rows);
    } catch (err) {
      console.log(err);
    }
  }
});

//Get latest user machinery usage
router.get("/getLatestMachineryUsage", userAuth, async (req, res) => {
  if (req.user) {
    try {
      const query =
        "SELECT id,date,SUM(work_time),machine FROM work WHERE worker_id=$1 GROUP BY date,machine,id ORDER BY date DESC LIMIT 3;";
      const values = [req.user.id];
      const response = await db.pool.query(query, values);
      res.status(200).json(response.rows);
    } catch (err) {
      console.log(err);
    }
  }
});

//Get all user machinery usage
router.get("/getMachineryUsage", userAuth, async (req, res) => {
  if (req.user) {
    try {
      const query =
        "SELECT id,date,SUM(work_time),machine FROM work WHERE worker_id=$1 GROUP BY date,machine,id ORDER BY date DESC;";
      const values = [req.user.id];
      const response = await db.pool.query(query, values);
      res.status(200).json(response.rows);
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = router;
