//Ejercicio 1 Tema 6

// Terminado

window.onload = function(){
    
    var formulario = document.getElementById("formulario");

    document.getElementById("enviar").onclick = function(e){
       // e.preventDefault();
        document.getElementById("resultado").innerText = retornaValor(formulario);
        return false;
    }

}

function retornaValor(objeto){
    
    var texto = "Contenidos de los campos: ";
    for( var i = 0; i < objeto.length-2; i++ ){

        
        if (((objeto[i].type == "text")||(objeto[i].type == "textarea"))&&((objeto[i].value != "" ))){

            texto +=  objeto[i].value + ", ";

        }else if (objeto[i].checked == true){

            texto +=  objeto[i].value + ", ";

            if (objeto[i].value == "Coche") {
                texto +=  objeto[i+1].value + ", ";
            }

        }

    }
    return texto;
}