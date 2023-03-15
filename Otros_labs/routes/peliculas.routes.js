const express = require('express');
const peliculasController = require('../controllers/peliculas.controller')
const router = express.Router();

router.get('/', peliculasController.getIndex);

router.get('/peliculas', peliculasController.getPeliculas);

router.get('/noticias', peliculasController.getNoticias);

router.get('/nosotros', peliculasController.getNosotros);
module.exports = router;