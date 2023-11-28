const express = require("express");
const router = express.Router();
const db = require("../DBconnection.js");
const adminAuth = require("../controllers/middleware/adminAuthMiddleware.js");

router.get("/getWorkerBasicInfo", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT work.worker_id,users.name,users.surname, SUM(salary) FROM work,users WHERE users.id=work.worker_id GROUP BY work.worker_id,users.name,users.surname ORDER BY SUM(salary) DESC LIMIT 3;";
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getAllWorkerBasicInfo", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT work.worker_id,users.name,users.surname, SUM(salary) FROM work,users WHERE users.id=work.worker_id GROUP BY work.worker_id,users.name,users.surname ORDER BY SUM(salary) DESC;";
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Update worker details
router.put("/updateWorker", adminAuth, async (req, res) => {
  try {
    const query =
      "UPDATE users SET name=$1,surname=$2, salary_coefficient=$3 WHERE id=$4;";
    const values = [
      req.body.name,
      req.body.surname,
      Number(req.body.salary) / 60,
      req.body.id,
    ];
    const response = await db.pool.query(query, values);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
});

//Get workers salary information (group by year-month)
router.get("/workersSalary", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT work.worker_id,users.name,users.surname, DATE_TRUNC('month',date+INTERVAL '1 month') AS date, SUM(salary) AS salary FROM work,users WHERE work.worker_id=users.id GROUP BY 1,2,3,4 ORDER BY work.worker_id ASC LIMIT 3";
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get workers salary information (group by year-month)
router.get("/allWorkersSalary", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT work.worker_id,users.name,users.surname, DATE_TRUNC('month',date+INTERVAL '1 month') AS date, SUM(salary) AS salary FROM work,users WHERE work.worker_id=users.id GROUP BY 1,2,3,4 ORDER BY work.worker_id ASC";
    //************************* */
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get usage of machines
router.get("/workersMachineryUsage", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT DATE_TRUNC('month',date+INTERVAL '1 month') AS date, work.machine, SUM(work.work_time),worker_id FROM work GROUP BY 1,2,worker_id LIMIT 3;";
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get all data usage of machines
router.get("/allWorkersMachineryUsage", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT DATE_TRUNC('month',date+INTERVAL '1 month') AS date, work.machine, SUM(work.work_time),worker_id FROM work GROUP BY 1,2,worker_id LIMIT 3;";
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get information about workers work

router.get("/workersWork", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT work.id,users.name,users.surname, work.type_of_work, work.yields_weight,work.date,work.work_description FROM work,users WHERE work.worker_id=users.id ORDER BY work.date DESC LIMIT 3;";
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

router.get("/allWorkersWork", adminAuth, async (req, res) => {
  try {
    const query =
      "SELECT work.id,users.name,users.surname, work.type_of_work, work.yields_weight,work.date,work.work_description FROM work,users WHERE work.worker_id=users.id ORDER BY work.date DESC;";
    const response = await db.pool.query(query);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get specific worker details

router.get("/worker/:id", adminAuth, async (req, res) => {
  try {
    const query = "SELECT * FROM users WHERE id=$1";
    const values = [req.params.id];
    const response = await db.pool.query(query, values);
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
