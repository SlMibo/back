const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwt_generate = (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, process.env.FIRMA, (err, token) => {
      if (err) {
        reject({ message: "Hubo un error al generar el token", err})
      }
      resolve(token)
    })
  })
}

module.exports = jwt_generate;