//pregunta 1
let number = prompt("Ingresa un numero:");
document.write("Pregunta 1 <br><br>");
for (let i = 1; i <= number; i++) {
  document.write(
    " Número: " + i + " Cuadrado: " + i * i + " Cubo: " + i * i * i + "<br>"
  );
}

//Pregunta 2
document.write("<br><br>Pregunta 2<br>");
let num1 = Math.round(Math.random() * 100);
let num2 = Math.round(Math.random() * 100);
let start = new Date();
let sum = prompt("Cual es la suma de " + num1 + " + " + num2 + "?");
let finish = new Date();
const time = finish - start;
if (sum == num1 + num2) {
  document.write(
    "La respuesta es correcta, tardaste: " + time / 1000 + " segundos"
  );
} else {
  document.write(
    "La respuesta es incorrecta, tardaste: " + time / 1000 + " segundos"
  );
}

//Pregunta 3
document.write("<br><br> Pregunta 3<br>");
let pos = 0;
let neg = 0;
const array = [];
let j = prompt("Ingresa cuantos numeros quieres ingresar:");
for (let i = 0; i < j; i++) {
  let numb = prompt("Numero " + (i + 1));
  array.push(numb);
}

const cont = (array) => {
  array.forEach((i) => {
    if (Math.sign(i) >= 0) {
      pos++;
    } else {
      neg++;
    }
  });
};

cont(array);
document.write("Positivos: " + pos);
document.write("<br>Negativos: " + neg);

//Pregunta 4
document.write("<br><br> Pregunta 4<br>");

const matrix = [
  [6, 7, 8, 9],
  [4, 4, 4, 4],
  [2, 3, 4, 5],
];
const prom = (matrix) => {
  document.write("Los promedios de los renglones son: <br>");
  matrix.forEach((fila) => {
    let suma = 0;
    let fila_num = 0;
    fila.forEach((num) => {
      suma = suma + num;
      fila_num++;
    });
    let prome = suma / fila_num;
    document.write(prome + "<br>");
  });
};
prom(matrix);

//Pregunta 5
document.write("<br><br>Pregunta 5<br>");
const num_dig = prompt("Ingrese un numero: ");
const reverseNumber = (n) => {
  const num_inv = n.toString().split("").reverse().join("");
  document.write(num_inv);
};
reverseNumber(num_dig);

//Pregunta 6
document.write("<br><br>Pregunta 6<br>");
document.write(
  "Contamos con una sala de cine, por lo cual vamos a tomar la orden de las personas con lo que ellas quieran cosumir: <br>"
);
function Cuenta(pelicula, cantidad, num_palomitas, num_refrescos, num_hotdogs) {
  this.nueva_peli = pelicula;
  this.boletos = cantidad;
  this.palomitas = num_palomitas;
  this.refrescos = num_refrescos;
  this.hotdogs = num_hotdogs;
  this.imprimir = imprimir_cuenta;
}
const imprimir_cuenta = () => {
  document.write(
    "Pelicula: ",
    this.nueva_cuenta,
    "<br>",
    "Boletos: ",
    this.boletos,
    " ,costo: $",
    Number(this.boletos) * 30,
    "<br>",
    "Palomitas: ",
    this.palomitas,
    " ,costo: $",
    this.palomitas * 70,
    "<br>",
    "Refresco: ",
    this.refrescos,
    " ,costo: $",
    this.refrescos * 45,
    "<br>",
    "Hot dogs: ",
    this.hotdogs,
    " ,costo: $",
    this.hotdogs * 45,
    "<br>"
  );
};
const pel = prompt("Ingrese el nombre de la pelicula:");
const bol = prompt("Ingrese cantidad de boletos:");
const pal = prompt("Ingrese cantidad de palomitas:");
const ref = prompt("Ingrese cantidad de refrescos:");
const hot = prompt("Ingrese cantidad de hot dogs:");

const nueva_cuenta = new Cuenta(pel, bol, pal, ref, hot);
console.log(nueva_cuenta);
nueva_cuenta.imprimir();
