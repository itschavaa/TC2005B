exports.getIndex = (request, response, next) => {
  response.render('index')
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