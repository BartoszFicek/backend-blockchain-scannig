const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let results = await db.getAll();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/get-item/:id", async (req, res, next) => {
  try {
    let results = await db.getOneById(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/put-item", (req, res, next) => {
  db.addNewAccount(req.query.accountNumber)
    .then(results => {
      console.log(results);
      res.json(results);
    })
    .catch(e => {
      res.sendStatus(500);
      console.log(e);
    });
});

module.exports = router;
