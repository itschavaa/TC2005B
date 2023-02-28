const http = require("http");
const server = http.createServer((request, response) => {
  let home = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <br>
    <br>
    <center><h3> Bienvenidx al cine, por aquí puedes generar tu orden :) </h3></center>
  <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </body>
  </html>`;
  let ordenar = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <br>
    <form action="/pedir" method="POST">
      <div class="form-group">
        <label for="pelicula">Pelicula:</label>
        <textarea class="form-control" id="peliculaNueva" rows="1"></textarea>
      </div>
      <br>
      <div class="form-group">
        <label for="boletos">Boletos:</label>
        <select class="form-control" id="selectBoletos">
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
      <br>
      <div class="form-group">
        <label for="palomitas">Palomitas:</label>
        <select multiple class="form-control" id="selectPalomitas">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Pedir</button>
    </form>
  <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </body>
  </html>`
  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write(home);
    response.end();
  }
  else if (request.url === "/ordenar" && request.method === "GET"){
    response.setHeader("Content-Type", "text/html");
    response.write(ordenar);
    response.end();
  }
  else if (request.url === "/ordenar" && request.method === "POST"){
    const datos = [];
    request.on('data',(dato)=>{
      console.log(dato);
      dato.push(dato);
    })
    return request.on('end', () => {
      const datos_completos = Buffer.concat(datos).toString();
      console.log(datos_completos);
    });
    response.setHeader("Content-Type", "text/html");
    response.write();
    response.end();
  }
});

server.listen(3000);
