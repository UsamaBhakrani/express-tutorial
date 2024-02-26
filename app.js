const express = require("express");
const app = express();
const port = 8080;
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

// static Assets
app.use(express.static("./methods-public"));

// parse formdata
app.use(express.urlencoded({ extended: false }));

// pasrse Json
app.use(express.json());

// people router
app.use("/api/people", peopleRouter);

// auth router
app.use("/login", authRouter);


app.listen(port, () => console.log("server running on port", port));
