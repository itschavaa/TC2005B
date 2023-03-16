const Noticia = require("../models/noticias.model");

exports.getIndex = (request, response, next) => {
  response.render('index',{ultima_pelicula: request.session.ultima_pelicula})
};

exports.getPeliculas = (request, response, next) => {
  response.render('peliculas')
};

exports.getNoticias = (request, response, next) => {
  response.render('noticias')
};

exports.getNosotros = (request, response, next) => {
  response.render('nosotros')
};

exports.getCrearNoticia = (request, response, next) => {
  response.render('crearNoticia')
};

exports.insertarNoticia = (request, response, next) => {
  const noticias = new Noticia({
    titulo: request.body.titulo, 
    texto: request.body.texto,
  });
  noticias.save().then(() => {
      response.redirect('/');
  }).catch(err => console.log(err));
};