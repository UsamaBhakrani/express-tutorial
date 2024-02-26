const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { products } = require("./data");

// static middleware
// app.use(express.static("./navbar-app/public"));
// app.use(express.json("./data.js"));

app.get("/", (req, res) =>
  res.send("<h1>Home Page</h1><a href='/api/products'>Products Api</a>")
);

app.get("/api/products", (req, res) => {
  const newProducts = products.map(({ id, name, image }) => {
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!singleProduct) return res.status(404).send("404 Not Found");
  return res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  let sorted = [...products];

  if (search)
    sorted = sorted.filter((product) => product.name.startsWith(search));

  if (limit) sorted = sorted.slice(0, parseInt(limit));

  if (sorted.length < 1)
    return res.status(200).send("No Products Found for Search");

  res.status(200).json(sorted);
});

// app.get("/", (req, res) =>
//   res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// );

app.all("*", (req, res) => res.status(404).send("404 not Found"));

app.listen(port, () => console.log("server running on port", port));
