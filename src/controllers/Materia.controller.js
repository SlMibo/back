const Materia = require('../models/Materia.model');
const controller = {};

controller.getMaterias = async (req, res) => {
  const materias = await Materia.find({ activo: true });
  res.json(materias);
};

controller.getMateria = async (req, res) => {
  const { id } = req.params;

  try {
    const materia = await Materia.findOne({_id: id});
    res.json(materia);
  } catch(error) {
    res.json({
      msg: 'Error al obtener la materia.'
    });
  }
};

controller.createMateria = async (req, res) => {
  let { nombre, descripcion, profesores, alumnos } = req.body;

  const materia = new Materia({ nombre, descripcion, profesores, alumnos });
  await materia.save();

  res.json({
    msg: 'Materia agregada.',
  });
};

controller.updateMateria = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, programa, alumnos, asistencia, notas } = req.body;
  const update = {};

  if (nombre) {
    update.nombre = nombre;
  }

  if (descripcion) {
    update.descripcion = descripcion;
  }

  if (programa) {
    update.programa = programa;
  }

  if (alumnos) {
    update.alumnos = alumnos;
  }

  if (asistencia) {
    update.asistencia = asistencia;
  }

  if (notas) {
    update.notas = notas;
  }

  if ( update.nombre || update.descripcion || update.programa || update.alumnos || update.asistencia || update.notas ) {
    try {
      const materia = await Materia.findByIdAndUpdate(id, update, { new: true });
      return res.json({ msg: 'Los datos de la materia se han actualizado.' });
    } catch (error) {
      return res.status(401).json({ msg: 'Error al actualizar la materia.' });
    }
  } else {
    res.status(401).json({
      msg: 'No se enviaron datos.',
    });
  };
};

controller.deleteMateria = async (req, res) => {
  const { id } = req.params;

  try {
    const materia = await findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
      );

      res.json({
        msg: "La materia se elimino del sistema.",
      });
  } catch {
    res.status(500).json({ msg: 'Error al eliminar la materia.' });
  }
};

module.exports = controller;
