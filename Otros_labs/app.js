const express = require('express');
const app = express();

const misRutas = require('./routes/peliculas.routes.js');
const misOtrasRutas = require('./routes/boletos.routes.js');

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(misRutas, misOtrasRutas);



app.listen(3000);