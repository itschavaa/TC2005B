const express = require('express');
const { readFile } = require('fs');

const router = express.Router();

router.get('/boletos', (request, response, next) => {
  readFile('./pages/boletos.html','utf-8' , (err, html) => {
    if(err)
      throw err
    response.send(html); 
  })
});
router.post('/boletos', (request, response, next) => {
  console.log(request.body)
  if(request.body.peliculas === "avatar") {
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head><body>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />`);
    response.write("<center> <h2> Hola "+ request.body.nombre + ", gracias por comprar " + request.body.boletos + " boleto/boletos (: </h2></center><br>");
    response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/a8Gx8wiNbs8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
  }
    else if (request.body.peliculas == "EEAAO"){
      response.setHeader('Content-Type', 'text/html');
      response.write(`<!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />`);
      response.write("<center> <h2> Hola "+ request.body.nombre + ", gracias por comprar " + request.body.boletos + " boleto/boletos (: </h2></center><br>");
      response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/wxN1T1uxQ2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
      return response.end();


    } else if (request.body.peliculas == "Close"){
        response.write(`<!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />`);
      response.write("<center> <h2> Hola "+ request.body.nombre + ", gracias por comprar " + request.body.boletos + " boleto/boletos (: </h2></center><br>");
      response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/_D8a6XG8Do4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
      return response.end();
    } 
    else if (request.body.peliculas == "WomenTalking"){
        response.write(`<!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />`);
      response.write("<center> <h2> Hola "+ request.body.nombre + ", gracias por comprar " + request.body.boletos + " boleto/boletos (: </h2></center><br>");
      response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/pvAJAnKHC1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
      return response.end();
  }});

module.exports = router;