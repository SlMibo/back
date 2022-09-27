const route = require("express").Router();

const {
  getMaterias,
  getMateria,
  createMateria,
  updateMateria,
  deleteMateria,
} = require('../controllers/Materia.controller');


route.get("/", getMaterias);
route.get("/:id", getMateria);
route.post("/", createMateria);
route.put("/:id", updateMateria);
route.delete("/:id", deleteMateria);

module.exports = route;