require('./src/connection/connect');
require('dotenv').config();
const express = require('express');
const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get('port') , () => {
    console.log('servidor iniciado en el puerto:', app.get('port'))
})