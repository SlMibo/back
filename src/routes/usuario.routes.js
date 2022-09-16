const route = require("express").Router();

const {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/Usuario.controller');

// normal:
route.get("/:id", getUsuario);
route.get("/", getUsuarios);
route.post("/", createUsuario);
route.put("/:id", updateUsuario);
route.put("/password/:id", updateUsuario);
route.delete("/:id", deleteUsuario);

module.exports = route;