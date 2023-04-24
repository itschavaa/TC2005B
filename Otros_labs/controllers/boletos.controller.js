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

exports.postBoletos = async (req, res, next) => {
  console.log(req.body);


  
};
