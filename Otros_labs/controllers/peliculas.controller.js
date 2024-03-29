const Noticia = require("../models/noticias.model");

exports.getIndex = (request, response, next) => {
  response.render('index',{ultima_pelicula: request.session.ultima_pelicula})
};

exports.getPeliculas = (request, response, next) => {
  response.render('peliculas')
};

exports.getNoticias = (request, response, next) => {
  Noticia.fetchAll()
  .then(([rows, fieldData]) => {
      response.render('noticias', {
          data: rows 
      })
  })
  .catch(err => console.log(err))
};


exports.getNosotros = (request, response, next) => {
  response.render('nosotros')
};

exports.getCrearNoticia = (request, response, next) => {
  response.render('crearNoticia')
};

exports.insertarNoticia = (request, response, next) => {
    console.log(request.file);
  const noticias = new Noticia({
    titulo: request.body.titulo, 
    texto: request.body.texto,
      imagen: request.file.filename,
  });
  noticias.save().then(() => {
      response.redirect('/');
  }).catch(err => console.log(err));
};

exports.api = (request, response, next) => {
    response.render('api');
};

exports.graficas = (request, response, next) => {
    response.render('graficas')
};
