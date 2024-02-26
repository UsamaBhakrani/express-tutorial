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
  res.status(201).send("Success");
});

// Index.html Post
app.post("/login", (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Please Provide User Name");
  }
  res.status(200).json({ name: req.body.name, id: people.length + 1 });
});

app.listen(port, () => console.log("server running on port", port));
