const route = require("express").Router();

const {
  getCarreras,
  getCarrera,
  createCarrera,
  updateCarrera,
  deleteCarrera,
} = require('../controllers/Carrera.controller');


route.get("/", getCarreras);
route.get("/:id", getCarrera);
route.post("/", createCarrera);
route.put("/:id", updateCarrera);
route.delete("/:id", deleteCarrera);

module.exports = route;