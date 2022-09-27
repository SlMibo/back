const Usuario = require('../models/Usuario.model');
const bcryptjs = require("bcryptjs");
const controller = {};

controller.getUsuarios = async (_req, res) => {
  const usuarios = await Usuario.find({ activo: true });

  res.json(usuarios);
};

controller.getUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findOne({ _id: id });
    res.json(usuario);
  } catch (error) {
    res.json({
      msg: "Error al obtener usuario",
    });
  }
};

controller.createUsuario = async (req, res) => {
  let { nombres, apellidos, dni, fecha_nacimiento, genero, direccion, nacionalidad, email, password, rol } = req.body;

  const salt = bcryptjs.genSaltSync();
  password = bcryptjs.hashSync(password, salt);

  try {
    const usuario = new Usuario({ nombres, apellidos, dni, fecha_nacimiento, genero, direccion, nacionalidad, email, password, rol });
    await usuario.save();
  
    return res.json({
      msg: "Usuario agregado",
    });
    
  } catch (error) {
    return console.log(error)
  }
};

controller.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, dni, fecha_nacimiento, genero, direccion, nacionalidad, email, fecha_ingreso, rol, activo } = req.body;
  const update = {};

  if (nombres) {
    update.nombres = nombres;
  }

  if (apellidos) {
    update.apellidos = apellidos;
  }

  if (dni) {
    update.dni = dni;
  }

  if (fecha_nacimiento) {
    update.fecha_nacimiento = fecha_nacimiento;
  }

  if (genero) {
    update.genero = genero;
  }

  if (direccion) {
    update.direccion = direccion;
  }

  if (nacionalidad) {
    update.nacionalidad = nacionalidad;
  }

  if (email) {
    update.email = email;
  }

  if (fecha_ingreso) {
    update.fecha_ingreso = fecha_ingreso;
  }

  if (activo) {
    update.activo = activo;
  }

  if (rol) {
    update.rol = rol;
  }

  if (update.nombres || update.apellidos || update.dni || update.fecha_nacimiento || update.genero || update.direccion || update.nacionalidad || update.fecha_ingreso || update.email || update.rol || update.activo) {
    try {
      const usuario = await Usuario.findByIdAndUpdate(id, update, { new: true });
      return res.json({ msg: "Datos de usuario actualizados" });
    } catch (error) {
      return res.status(401).json({ msg: "Error al actualizar usuario" });
    }
  } else {
    res.status(401).json({
      msg: "No se enviaron datos",
    });
  }
};

controller.deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true }
    );
    return console.log(usuario)
    res.json({
      msg: "El usuario se elimino del sistema",
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar usuario" });
  }
};

module.exports = controller;