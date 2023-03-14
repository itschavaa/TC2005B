const express = require('express');
const app = express();
const path = require('path')

const misRutas = require('./routes/peliculas.routes.js');
const misOtrasRutas = require('./routes/boletos.routes.js');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(misRutas, misOtrasRutas);



app.listen(3000);