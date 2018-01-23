//Ejercico 4 Tema 6

/*
    Nota: lo comentado son otras formas de hacer lo que queria

*/

var numeroA = generarNumeroAleatorio();
var numeroB = generarNumeroAleatorio();
var resultado = numeroA + numeroB;


window.onload = function() {




    //txtA = document.createTextNode(numeroA);

    //document.getElementById("numeroA").appendChild(txtA);
    document.getElementById("numeroA").textContent = numeroA;
    document.getElementById("numeroB").textContent = numeroB;

    //document.getElementById("comprobador").innerHTML = numeroA+" + "+numeroB+" =";




}




window.onclick = function(){
    comprobador = document.getElementById("aceptar").checked;
    if (comprobador) {
        document.getElementById("boton").disabled = false;
        //alert(comprobador);
    }else{
        document.getElementById("boton").disabled = true;
    }
}





function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 10);
}

function nuevoNumero(){

    numeroA = generarNumeroAleatorio();
    numeroB = generarNumeroAleatorio();
    resultado = numeroA + numeroB;

    document.getElementById("numeroA").textContent = numeroA;
    document.getElementById("numeroB").textContent = numeroB;

}



function comprobadorPass(){
   pas1 = document.getElementById("pass").value;
   pas2 = document.getElementById("repass").value;


   if ((pas1 === pas2)&&(pas1.length >= 8)) {
        document.getElementById("pass").style.background = "green";
        document.getElementById("repass").style.background = "green";
        return true;
   }else{
        document.getElementById("pass").style.background = "red";
        document.getElementById("repass").style.background = "red";
        return false;
   }
    
}


function comprobarSuma(){

    resultadoUser = document.getElementById("resultado").value;

    if (resultado == resultadoUser) {
        document.getElementById("resultado").style.background = "green";
        return true;
    }else{
        document.getElementById("resultado").style.background = "red";
        nuevoNumero();
        return false;
    }
}




function compruebaVacio(){

    valor = document.getElementById("nombre").value;

    if (valor == ""){
        document.getElementById("nombre").style.background = "red";
        return false;

       
    }else{
        document.getElementById("nombre").style.background = "green";
        return true;
       
    }

    

}


function compruebaEmail(){

    email = document.getElementById("email").value;

    if (email.indexOf("@") == -1){
        document.getElementById("email").style.background = "red";
        return false;

    }else{
        document.getElementById("email").style.background = "green";
        return true;

    }



}

function comprobadorTotal(){

    contador = 0;

    if (compruebaEmail()) {contador++;}

    if (compruebaVacio()) {contador++;}

    if (comprobarSuma()) {contador++;}

    if (comprobadorPass()) {contador++;}


   // alert(contador);

   if (contador === 4) {

    alert("Todo correcto");
   }else{
    alert("Hay algun error");
   }





}


/*

document.getElementById("boton").onclick = function(){

    valor = document.getElementById("nombre").value;

    if (valor == ""){
        document.getElementById("nombre").style.background = "red";

       
    }else{
        document.getElementById("nombre").style.background = "green";

       
    }

    
}

*/

