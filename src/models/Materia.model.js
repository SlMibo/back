const { Schema, model } = require('mongoose');
const usuarios = moongose.model('Usuario')

const MateriaSchema = new mongoose.Schema({
  nombre : {
    type: String,
    required: true
  },
  alumnos : [{
    alumno: {
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      default: null,
    },
    asistencia : {
      { fecha },
      { valor },
    },
    notas : {
      primerParcial,
      segundoParcial,
      final,
    }
  }],
  descripcion : {
    type: String,
    required: true
  },
  programa : {
    type: []
  },
  nota : {
    type: String
  }
  activo : {
    type: Boolean,
    default: true
  }
})

module.exports = model('Materia', UserSchema);