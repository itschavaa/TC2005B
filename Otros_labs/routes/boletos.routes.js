const express = require('express');
const { readFile } = require('fs');
const path = require('path')

const router = express.Router();
const videos = {
  EEAAO:"https://www.youtube.com/embed/wxN1T1uxQ2g",
  close: "https://www.youtube.com/embed/_D8a6XG8Do4",
  avatar: "https://www.youtube.com/embed/a8Gx8wiNbs8",
  wt:"https://www.youtube.com/embed/pD0mFhMqDCE"

}

router.get('/boletos', (request, response, next) => {
  response.render('boletos')
});
router.post('/boletos', (request, response, next) => {
  if (request.body.peliculas=="EEAAO"){
    var url=videos.EEAAO;
    var nombre = "Everything Everywhere All At Once"
  } else if (request.body.peliculas=="Close"){
    var url=videos.close;
    var nombre = "Close"
  } else if (request.body.peliculas=="WomenTalking"){
    var url=videos.wt;
    var nombre = "Women Talking"
  } else if (request.body.peliculas=="avatar"){
    var url=videos.avatar;
    var nombre = "Avatar: The Way of the Water"
  }

  if (request.body.boletos>1){
    var tex = "Tus boletos"
    var bol = "boletos"
  } else {
    var tex = "Tu boleto"
    var bol = "boleto"
  }
  response.render('boletos_post', {nombre:request.body.nombre, peli:url, cantidad:request.body.boletos, peliNom:nombre, boletos:bol, texto:tex})
  console.log(request.body);
});

module.exports = router;