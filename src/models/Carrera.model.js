const { Schema, model } = require('mongoose');
// const materias = model('Materia');
// const usuarios = model('Usuario');

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
			ref: 'usuarios',
			default: null,
			},
			fecha_ingreso : {
				type: Date,
				required:true
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
			ref: 'materias',
		}],
	}],
	activo : {
		type: Boolean,
		default: true
	}
})

module.exports = model('Carrera', CarreraSchema);
