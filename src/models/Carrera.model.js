const { Schema, model } = require('mongoose');
const materias = moongose.model('Materia');
const usuarios = moongose.model('Usuario');

const CarreraSchema = new mongoose.Schema({
	nombre : {
		type: String,
		required: true
	},
	duracion : {
		type: String,
		required: true
	},
	//La duración se ingresa en cuatrimestres
	descripcion : {
		type: String,
		required: true
	},
	cursos : [{
    descripcion: [{
      type: Number
    }],
		alumnos: [{
			type: Schema.Types.ObjectId,
			ref: 'usuarios',
			default: null,
		}], 
    ciclo_lectivo : {
      type: String,
    }
		materias: [{
			type: Schema.Types.ObjectId,
			ref: 'materias',
		}],
	}],
	activo : {
		type: Boolean,
		default: true
	}
})

module.exports = model('Carrera', UserSchema);