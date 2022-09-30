const Anuncio = require('../models/Anuncios.model');
const controller = {};

controller.getAnuncios = async (req, res) => {
  const anuncios = await Anuncio.find({ activo: true });
  res.json(anuncios);
};

controller.getAnuncio = async (req, res) => {
  const { id } = req.params;

  try {
    const anuncio = await Anuncio.findOne({_id: id});
    res.json(anuncio);
  } catch(error) {
    res.json({
      msg: 'Error al obtener el anuncio.'
    });
  }
};

controller.createAnuncio = async (req, res) => {
  let { descripcion, tipo } = req.body;

  const anuncio = new Anuncio({ descripcion, tipo });
  await anuncio.save();

  res.json({
    msg: 'Anuncio publicado.',
  });
};

controller.updateAnuncio = async (req, res) => {
  const { id } = req.params;
  const { descripcion, tipo } = req.body;
  const update = {};

  if (descripcion) {
    update.descripcion = descripcion;
  }

  if (tipo) {
    update.tipo = tipo;
  }


  if ( update.descripcion || update.tipo ) {
    try {
      const anuncio = await anuncio.findByIdAndUpdate(id, update, { new: true });
      return res.json({ msg: 'El anuncio se han actualizado.' });
    } catch (error) {
      return res.status(401).json({ msg: 'Error al actualizar el anuncio.' });
    }
  } else {
    res.status(401).json({
      msg: 'No se enviaron datos.',
    });
  };
};

controller.deleteAnuncio = async (req, res) => {
  const { id } = req.params;

  try {
    const anuncio = await findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
      );

      res.json({
        msg: "El anuncio se elimino del sistema.",
      });
  } catch {
    res.status(500).json({ msg: 'Error al eliminar el anuncio.' });
  }
};

module.exports = controller;
