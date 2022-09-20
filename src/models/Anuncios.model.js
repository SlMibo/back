const { Schema, model } = require('mongoose');
const materias = moongose.model('Materia');
const usuarios = moongose.model('Usuario');

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