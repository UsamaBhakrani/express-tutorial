const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Please Provide User Name");
  }
  res.status(200).send({ name: req.body.name });
});

module.exports = router;
