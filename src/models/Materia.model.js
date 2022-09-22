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
    asistencia : [{
      fecha: {
        type: Date
      },
      valor: {
        type: String,
        enum: ['P', 'A'],
        default: 'P'
      },
    }],
    notas : {
      primerParcial: { type: Number, default: 0},
      segundoParcial: { type: Number, default: 0},
      recuperatorio: { type: Boolean },
      final: { type: Number, default: 0 },
    }
  }],
  programa : [{
    type: String,
  }],
  profesores : [{
    profesor: {
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
    },
    cargo : {
      type: String,
      enum: ['Titular', 'Auxiliar']
    }
  }],
  horario : [{
    dias : [{
      type: String,
      enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    }],
    hora_inicio : {
      type: Number,
    },
    hora_final : {
      type: Number,
    }
  }],
  activo : {
    type: Boolean,
    default: true
  }
})

module.exports = model('Materia', MateriaSchema);