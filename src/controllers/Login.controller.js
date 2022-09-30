const Usuarios = require('../models/Usuario.model');
const bcryptjs = require('bcryptjs');
const createJwt = require('../helpers/jwt_generate');
const controller = {};

controller.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuarios.findOne({ email: email, activo: true });
    // return res.json(usuario)
    if (usuario) {
        const validation = bcryptjs.compareSync(password, usuario.password);
        
        if (validation) {
          const { _id } = usuario;
          //console.log(_id);
          const token = await createJwt(_id);
          console.log(token)
          return res.status(200).json({ usuario: { token }});
        }
        return res.status(400).json({ message: 'Contraseña incorrecta' });
    }
    return res.status(400).json({ message: 'Usuario no encontrado' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = controller;