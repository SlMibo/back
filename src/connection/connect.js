const {connect} = require("mongoose");
require("dotenv").config();

connect(process.env.MONGOURI)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error("ERROR AL CONECTAR DB: ", err));

