const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

const misRutas = require("./routes/peliculas.routes.js");
const misOtrasRutas = require("./routes/boletos.routes.js");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret:
    "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);
  
app.use(misRutas, misOtrasRutas);
  
const rutasUsers = require('./routes/users.routes');

app.use('/users', rutasUsers);

app.listen(3000);
