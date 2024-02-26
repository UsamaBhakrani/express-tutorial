const express = require("express");
const app = express();
const port = 8080;
let { people } = require("./data");

// static Assets

app.use(express.static("./methods-public"));

// parse formdata
app.use(express.urlencoded({ extended: false }));

// pasrse Json
app.use(express.json());

app.get("/api/people", (req, res) =>
  res.status(200).json({ success: true, data: people })
);

// Javascript Post
app.post("/api/people", (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Please Provide User Name");
  }
  res.status(200).json({ name: req.body.name, id: people.length + 1 });
});

// Index.html Post
app.post("/login", (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Please Provide User Name");
  }
  res.status(200).json({ name: req.body.name, id: people.length + 1 });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const newPerson = people.find((p) => p.id === parseInt(id));

  if (!newPerson) return res.status(404).send("Enter ID");

  newPerson.name = name;
  res.json(newPerson);
});

app.delete("/api/people/:id", (req, res) => {
  const newPerson = people.find((p) => p.id === parseInt(req.params.id));

  if (!newPerson) return res.status(404).send("Enter Proper ID to Delete");
  
  const newList = people.filter((p) => p.id !== parseInt(req.params.id));
  
  res.status(200).json(newList);
});

app.listen(port, () => console.log("server running on port", port));
