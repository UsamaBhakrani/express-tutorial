const authorized = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", age: "18", id: 4 };
    next();
  } else {
    res.status(401).send("UnAuthorized");
  }
};

module.exports = authorized;
