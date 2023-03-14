const express = require('express');
const { readFile } = require('fs');

const router = express.Router();

router.get('/', (request, response, next) => {
  readFile('./pages/index.html','utf-8' , (err, html) => {
    if(err)
      throw err
    response.send(html); 
  
  })
});

router.get('/peliculas', (request, response, next) => {
  readFile('./pages/peliculas.html','utf-8' , (err, html) => {
    if(err)
      throw err
    response.send(html); 
  })
});

router.get('/noticias', (request, response, next) => {
  readFile('./pages/noticias.html','utf-8' , (err, html) => {
    if(err)
      throw err
    response.send(html); 
  })
});

router.get('/nosotros', (request, response, next) => {
  readFile('./pages/nosotros.html','utf-8' , (err, html) => {
    if(err)
      throw err
    response.send(html); 
  })
});
module.exports = router;