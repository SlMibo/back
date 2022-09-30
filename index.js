require('./src/connection/connect');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.set("port", process.env.PORT || 4000);

app.listen(app.get('port') , () => {
    console.log('servidor iniciado en el puerto:', app.get('port'))
})

app.use('/usuario', require('./src/routes/usuario.routes'));
app.use('/login', require('./src/routes/login.routes'));
app.use('/carrera', require('./src/routes/carrera.routes'));
app.use('/materia', require('./src/routes/materia.routes'));
app.use('/anuncio', require('./src/routes/anuncio.routes'));