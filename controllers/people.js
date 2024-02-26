let { people } = require("../data");


const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Please Provide User Name");
  }
  res.status(200).json({ name: req.body.name, id: people.length + 1 });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const newPerson = people.find((p) => p.id === parseInt(id));

  if (!newPerson) return res.status(404).send("Enter ID");

  newPerson.name = name;
  res.json(newPerson);
};

const deletePerson = (req, res) => {
  const newPerson = people.find((p) => p.id === parseInt(req.params.id));

  if (!newPerson) return res.status(404).send("Enter Proper ID to Delete");

  const newList = people.filter((p) => p.id !== parseInt(req.params.id));

  res.status(200).json(newList);
};

module.exports = { getPeople, createPerson, updatePerson, deletePerson };
