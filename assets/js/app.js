function origen(){
  var textoIzquierda = document.getElementById("textoIzq");
  if (textoIzquierda.style.display == "none") {
    textoIzquierda.style.display = "inline-block"
  } else {
      textoIzquierda.style.display = "none"
  }
}

function extincion(){
  var textoDerecha = document.getElementById("textoDer");
  if (textoDerecha.style.display == "none") {
    textoDerecha.style.display = "inline-block"
  } else {
      textoDerecha.style.display = "none"
  }
}
