const revisar=(()=>{
  contrasena1 = document.getElementById("exampleInputEmail1");
  contrasena2 = document.getElementById("exampleInputPassword1");
  if (contrasena1.value == contrasena2.value){
     return alert("Son iguales :)");
  } else {
    return alert("OH NO, NO SON IGUALES");
  }
})