const { Schema, model } = require('mongoose');
const Materia = require('./Materia.model');
const Usuario = require('./Usuario.model');

const CarreraSchema = new Schema({
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
		grado: [{
		type: Number
		}],
		alumnos: [{
			alumno: {
			type: Schema.Types.ObjectId,
			ref: 'Usuario',
			default: null,
			},
			fecha_ingreso : {
				type: Date,
			},
			documentacion : [{
				type: String
			}]
		}], 
		ciclo_lectivo : {
		type: String,
		},
		materias: [{
			type: Schema.Types.ObjectId,
			ref: 'Materia',
		}],
	}],
	activo : {
		type: Boolean,
		default: true
	}
})

module.exports = model('Carrera', CarreraSchema);
