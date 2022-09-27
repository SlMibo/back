const route = require("express").Router();

const {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/Usuario.controller');


route.get("/", getUsuarios);
route.get("/:id", getUsuario);
route.post("/", createUsuario);
route.put("/:id", updateUsuario);
route.put("/password/:id", updateUsuario);
route.delete("/:id", deleteUsuario);

module.exports = route;