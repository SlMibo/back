const { Schema, model } = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombres : {
        type: String,
        required: true
    },
    apellidos : {
        type: String,
        required: true
    },
    dni : {
        type: String,
        required: true
    },
    fecha_nacimiento : {
        type: Date,
        required: true
    },
    genero : {
        type: ['Masculino', 'Femenino', 'Otro'],
        required: true
    },
    direccion : {
        type: String,
        required: true
    },
    nacionalidad : {
        type: String
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true
    },
    fecha_ingreso : {
        type: Date,
        required:true
    },
    documentacion : {
        type: []
    },
    rol : {
        type: ['admin', 'profesor', 'alumno'],
        required: true
    },
    activo : {
        type: Boolean,
        default: true
    }
})

module.exports = model('Usuario', UserSchema);