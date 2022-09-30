const Carrera = require('../models/Carrera.model');
const controller = {};

controller.getCarreras = async (req, res) => {
    const carreras = await Carrera.find({ activo: true });
    res.json(carreras);
}

controller.getCarrera = async (_req, res) => {
  const { id } = req.params;

  try {
    const carrera = await Carrera.findOne({ _id: id });
    res.json(carrera);
  } catch (error) {
    res.json({
      msg: "Error al obtener carrera",
    });
  }
}

controller.createCarrera = async (req, res) => {
  let { nombre, duracion, descripcion } = req.body;

  const carrera = new Carrera({ nombre, duracion, descripcion });
  await carrera.save();

  res.json({
    msg: "Carrera agregada",
  });
}

controller.updateCarrera = async (req, res) => {
  const { id } = req.params;
  const { nombre, duracion, descripcion, activo } = req.body;
  const update = {};

  if (nombre) {
    update.nombre = nombre;
  }

  if (duracion) {
    update.duracion = duracion;
  }

  if (descripcion) {
    update.descripcion = descripcion;
  }

  if (activo) {
    update.activo = activo;
  }

  if ( update.nombre || update.duracion || update.descripcion || update.activo ) {
    try {
      const carrera = await Carrera.findByIdAndUpdate(id, update, { new: true });
      return res.json({ msg: 'Los datos de la carrera se han actualizado.' });
    } catch (error) {
      return res.status(401).json({ msg: 'Error al actualizar la carrera.' });
    }
  } else {
    res.status(401).json({
      msg: 'No se enviaron datos.',
    });
  }
}

controller.deleteCarrera = async (req, res) => {
  const { id } = req.params;

  try {
    const carrera = await findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
      );

      res.json({
        msg: "La carrera se elimino del sistema.",
      });
  } catch {
    res.status(500).json({ msg: 'Error al eliminar la carrera.' });
  }
};


module.exports = controller;