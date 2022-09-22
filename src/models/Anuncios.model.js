const { Schema, model } = require('mongoose');
const materias = moongose.model('Materia');
const usuarios = moongose.model('Usuario');
const carrera = moongose.model('Carrera');

const AnuncioSchema = new mongoose.Schema({
  descripcion : {
  type: String,
  required: true
	},
  autor: [{
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
  }],
  tipo: {
    type: String,
    enum: ['General', 'Curso', 'Materia']
  },
  fecha: {
    type: Date
  },
  carrera: [{
    type: Schema.Types.ObjectId,
    ref: 'carrera'
  }],
  materia: [{
    type: Schema.Types.ObjectId,
    ref: 'materias'
  }],
  comentarios: [{
    autor: {
      type: Schema.Types.ObjectId,
      ref: 'usuarios'
    },
    fecha: {
      type: Date,
      default: Date.now()
    },
    descripcion: {
      type: String
    },
  }]
});


module.exports = model('Anuncios', AnuncioSchema);