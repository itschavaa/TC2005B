
console.log("hola desde node");
//filesystem sirve para acceder al sistema de archivos de la computadora
const filesystem = require("fs");
filesystem.writeFileSync("hola.txt", "Hola desde Node");
const arreglo = [
  5000, 60, 61, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50,
];

//setTimeout ejecuta la funcion por cada uno de los elementos del arreglo y ejecuta los que acaban primero
for (let item of arreglo) {
  setTimeout(() => {
    console.log(item);
  }, item);
}

setTimeout(()=>{console.log("check mate!")},15000);

//modulo que nos permite crear un servidor web y manejar peticiones y respuestas
const http = require("http");
const server = http.createServer((request,response)=>{
  console.log(request.url);
  response.setHeader('Content-Type','text/html');
  response.write("Hola crayola");
  response.write("<center><h1>Escribi esto desde node jiji </h1></center>")
  response.end();
});

server.listen(3000);

