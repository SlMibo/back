const route = require("express").Router();

const {
  getAnuncios,
  getAnuncio,
  createAnuncio,
  updateAnuncio,
  deleteAnuncio,
} = require('../controllers/Anuncio.controller');


route.get("/", getAnuncios);
route.get("/:id", getAnuncio);
route.post("/", createAnuncio);
route.put("/:id", updateAnuncio);
route.delete("/:id", deleteAnuncio);

module.exports = route;