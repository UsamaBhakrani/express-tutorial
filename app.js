const express = require("express");
const app = express();
const port = 8080;
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => res.send("About"));

app.all("*", (req, res) => res.status(404).send("404 not Found"));

app.listen(port, () => console.log("server running on port", port));
