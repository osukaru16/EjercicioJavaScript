//Ejercicio 2 Tema 6
//Terminado

window.onload = function(){
    document.getElementById("texto").onkeyup = function(){
        actualizaInfo(150);
    }
}


 function actualizaInfo(maximoCaracteres) {
    var texto = document.getElementById("texto").value;
    var info = document.getElementById("info");
  
    if(texto.length <= maximoCaracteres ) {
      info.innerHTML = "(Puedes escribir hasta "+(maximoCaracteres-texto.length)+" caracteres)";
    }
    else {
      document.getElementById("texto").value = texto.substring(0,maximoCaracteres);
      info.innerHTML = "(Como máximo son "+maximoCaracteres+" caracteres)";
    }
  }

 