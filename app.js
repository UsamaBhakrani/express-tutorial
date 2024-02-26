const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { products } = require("./data");

// static middleware
// app.use(express.static("./navbar-app/public"));
// app.use(express.json("./data.js"));


app.get("/", (req, res) => res.json(products));

// app.get("/", (req, res) =>
//   res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// );

app.all("*", (req, res) => res.status(404).send("404 not Found"));

app.listen(port, () => console.log("server running on port", port));
