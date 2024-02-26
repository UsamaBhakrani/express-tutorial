const express = require("express");
const router = express.Router();
let { people } = require("../data");



router.get("/", (req, res) =>
  res.status(200).json({ success: true, data: people })
);

// Javascript Post
router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Please Provide User Name");
  }
  res.status(200).json({ name: req.body.name, id: people.length + 1 });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const newPerson = people.find((p) => p.id === parseInt(id));

  if (!newPerson) return res.status(404).send("Enter ID");

  newPerson.name = name;
  res.json(newPerson);
});

router.delete("/:id", (req, res) => {
  const newPerson = people.find((p) => p.id === parseInt(req.params.id));

  if (!newPerson) return res.status(404).send("Enter Proper ID to Delete");

  const newList = people.filter((p) => p.id !== parseInt(req.params.id));

  res.status(200).json(newList);
});

module.exports = router;
