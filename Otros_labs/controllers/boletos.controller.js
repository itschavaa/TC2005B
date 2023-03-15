const Ticket = require("../models/tickets.models");
const videos = {
  EEAAO: "https://www.youtube.com/embed/wxN1T1uxQ2g",
  close: "https://www.youtube.com/embed/_D8a6XG8Do4",
  avatar: "https://www.youtube.com/embed/a8Gx8wiNbs8",
  wt: "https://www.youtube.com/embed/pD0mFhMqDCE",
};

exports.getBoletos = (request, response, next) => {
  const cookies = request.get('Cookie') || ''
  let consultas = cookies.split('=')[1] || 0;
  consultas ++;
  response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');
  response.render("boletos");
  
};

exports.postBoletos = (request, response, next) => {
  const ticket = new Ticket({
    cantidad : request.body.boletos,
    name: request.body.nombre
  });
  if (request.body.peliculas == "EEAAO") {
    ticket.url = videos.EEAAO;
    ticket.peliNombre = "Everything Everywhere All At Once";
  } else if (request.body.peliculas == "Close") {
    ticket.url = videos.close;
    ticket.peliNombre = "Close";
  } else if (request.body.peliculas == "WomenTalking") {
    ticket.url = videos.wt;
    ticket.peliNombre = "Women Talking";
  } else if (request.body.peliculas == "avatar") {
    ticket.url = videos.avatar;
    ticket.peliNombre = "Avatar: The Way of the Water";
  }

  if (request.body.boletos > 1) {
    ticket.texto = "Tus boletos";
    ticket.boletos = "boletos";
  } else {
    ticket.texto = "Tu boleto";
    ticket.boletos = "boleto";
  }
  
  ticket.save();
  request.session.ultima_pelicula = ticket.peliNombre;


  console.log(ticket);

  response.render("boletos_post", {
    nombre: ticket.name,
    peli: ticket.url,
    cantidad: ticket.cantidad,
    peliNom: ticket.peliNombre,
    boletos: ticket.boletos,
    texto: ticket.texto,
    ultima_pelicula: request.session.ultima_pelicula || '',
  });

  
};
