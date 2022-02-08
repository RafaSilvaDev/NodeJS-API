const express = require("express");
const routes = express.Router();

let db = [
  {
    1: {
      nome: "Cliente 1",
      idade: "20",
    },
    2: {
      nome: "Cliente 2",
      idade: "25",
    },
    3: {
      nome: "Cliente 3",
      idade: "40",
    },
  },
];

// requisitando dados
routes.get("/", (req, res) => {
  return res.json(db);
});

// inserindo dados
routes.post("/add", (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).end();

  db.push(body);
  return res.json(body);
});

//   Deletando dados
routes.delete("/:id", (req, res) => {
  const id = req.params.id;
  db = db.filter((data) => data.id != id);

  return res.send(db);
});

module.exports = routes;
