const http= require('http');

const server =http.createServer((request,response) => {
    console.log(request.url);
    if(request.url == "/" ){
                      let home = `<!DOCTYPE html>
                      <html>
                      <head><meta charset="utf-8"></head><body>
                      <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                        crossorigin="anonymous"
                      />
                      <h1>Cine</h1>
                      <a href="/boletos">Comprar boletos</a>
                      <br>
                      <a href="/nosotros">Nosotros</a>`
        response.setHeader('Content-Type', 'text/html');
        response.write(home);
        response.end();

    }   else if (request.url === "/boletos" && request.method === "GET") {
      let boletos = `<!DOCTYPE html>
                      <html>
                      <head><meta charset="utf-8"></head><body>
                      <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                        crossorigin="anonymous"
                      />
                      <h1>Peliculas</h1>
                      <form action="/boletos" method="POST">
                      `
        response.setHeader('Content-Type', 'text/html');
        response.write(boletos);

        let radios = '<fieldset><legend>¿Que pelicula quieres ver?</legend>';
        radios += '<div class="form-check"> <input class="form-check-input" type="radio" name="peliculas" id="avatar" value="avatar">'
        radios += '<label class="form-check-label" for="avatar">Avatar</label></div>';
        radios += '<div class="form-check"> <input class="form-check-input" type="radio" name="peliculas" id="EEAAO" value="EEAAO">'
        radios += '<label class="form-check-label" for="EEAAO">Everything Everywhere All At Once</label></div>';
        radios += '<div class="form-check"> <input class="form-check-input" type="radio" name="peliculas" id="Close" value="Close">'
        radios += '<label class="form-check-label" for="Close">Close</label></div>';
        radios += '<div class="form-check"> <input class="form-check-input" type="radio" name="peliculas" id="WomenTalking" value="WomenTalking">'
        radios += '<label class="form-check-label" for="WomenTalking">Women Talking</label></div>';
        //
        response.write(radios);

        let nombre = `<div class="form-group">
                        <label class="form-check-label" for="pelicula">Nombre:</label>
                       <textarea name="nombre" class="form-control" id="pelic" rows="1"></textarea>
                      </div>
                      <br>
                      <div class="form-group">
                        <label for="boletos">Boletos:</label>
                        <select class="form-control" id="selectBoletos" name="boletos">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                      <br>`
        response.write(nombre);
        response.write('<button type="submit" class="btn btn-primary">Comprar</button><br>');
        response.write('<a href="/">Volver a la principal</a>')

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    }else if (request.url === "/boletos" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const pelicula = datos_completos.split('&')[0].split('=')[1];
            const nombre = datos_completos.split('&')[1].split('=')[1];
            const boletos = datos_completos.split('&')[2].split('=')[1];
            if(pelicula === "avatar") {
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
                response.write("<center> <h2> Hola "+ nombre + ", gracias por comprar " + boletos + " boleto/boletos (: </h2></center><br>");
                response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/a8Gx8wiNbs8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
                return response.end();

            } else if (pelicula == "EEAAO"){
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
              response.write("<center> <h2> Hola "+ nombre + ", gracias por comprar " + boletos + " boleto/boletos (: </h2></center><br>");
              response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/wxN1T1uxQ2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
              return response.end();


            } else if (pelicula == "Close"){
                response.write(`<!DOCTYPE html>
                <html>
                <head><meta charset="utf-8"></head><body>
                <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                  crossorigin="anonymous"
                />`);
              response.write("<center> <h2> Hola "+ nombre + ", gracias por comprar " + boletos + " boleto/boletos (: </h2></center><br>");
              response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/_D8a6XG8Do4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
              return response.end();
            } 
            else if (pelicula == "WomenTalking"){
                response.write(`<!DOCTYPE html>
                <html>
                <head><meta charset="utf-8"></head><body>
                <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                  crossorigin="anonymous"
                />`);
              response.write("<center> <h2> Hola "+ nombre + ", gracias por comprar " + boletos + " boleto/boletos (: </h2></center><br>");
              response.write('<center><iframe width="560" height="315" src="https://www.youtube.com/embed/pvAJAnKHC1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><center>');
              return response.end();
          }});
    }else if(request.url === "/nosotros" ){
        response.setHeader('Content-Type', 'text/html');
        response.write(`<!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
        <p> Somos un cine cool </p>`);
        response.end();
    } else {
        response.statusCode = 404;
        response.write("Error 404");
        response.end();
    }

});
server.listen(3000);