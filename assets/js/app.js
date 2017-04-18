var botonOrigen = document.getElementById("botonOrigen");
botonOrigen.addEventListener("click", origen);
var botonExtincion = document.getElementById("botonExtincion");
botonExtincion.addEventListener("click", extincion);

function origen(){
  console.log("DDD");
  var textoIzquierda = document.getElementById("textoIzq");
  if (textoIzquierda.style.visibility == "hidden") {
    textoIzquierda.style.visibility = "visible"
  } else {
      textoIzquierda.style.visibility = "hidden"
  }
}

function extincion(){
  var textoDerecha = document.getElementById("textoDer");
  if (textoDerecha.style.visibility == "hidden") {
    textoDerecha.style.visibility = "visible"
  } else {
      textoDerecha.style.visibility = "hidden"
  }
}


var span = document.getElementsByClassName("cerrar");

for(var i = 0; i<span.length; i++){
  span[i].addEventListener("click", fotos);
}

function fotos(){;
  var eliminarFoto = this.getAttribute("name");
  console.log(eliminarFoto);
  this.style.display = "none";
  document.getElementById(eliminarFoto).style.display = "none";
}
