const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});
requireDir("./src/models");

const Product = mongoose.model("Product");

// Primeira rota
app.get("/", (req, res) => {
  Product.create({
    title: "ReactJS",
    description: "Build web-apps with React a JS Lib",
    url: "reactjs.com"
  });

  return res.send("Hello Almeida");
});

app.listen(3000);
