const express = require('express');
const { readFile } = require('fs');
const path = require('path')

const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('index')
});

router.get('/peliculas', (request, response, next) => {
  response.render('peliculas')
});

router.get('/noticias', (request, response, next) => {
  response.render('noticias')
});

router.get('/nosotros', (request, response, next) => {
  response.render('nosotros')
});
module.exports = router;