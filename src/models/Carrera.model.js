const { Schema, model } = require('mongoose');
const materias = moongose.model('Materia')

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
	curso : [{
		año: {
			type: Schema.Types.ObjectId,
			ref: 'usuarios',
			default: null,
		}, 
		materia: {
			type: Schema.Types.ObjectId,
			ref: 'materias',
		},
	}],
	cohorte : {
		type: String,
	},
	activo : {
		type: Boolean,
		default: true
	}
})

module.exports = model('Carrera', UserSchema);