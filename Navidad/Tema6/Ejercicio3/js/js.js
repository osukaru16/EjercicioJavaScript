//Ejercico 3 Tema 6

window.onload = function() {

    //alert("miau");
    var textoOrigen = "";
    var comprueba = true;






    document.getElementById("baseNumerica").onchange = function() {
        document.getElementById("numero").value = "";
    }



    document.getElementById("numero").onkeypress = function(event){
        //return limitaCaracters(event,retornaValor(document.getElementById("selSistNum")));
        //comprueba = true;
        var obj = document.getElementById("baseNumerica");
        baseValor(event, obj);

        

    };


    document.getElementById("numero").onkeyup = function(){
        if (comprueba) {
            
            document.getElementById("numero").value = textoOrigen.substring(0,textoOrigen.length-1);
        }
    }





   function baseValor(e, obj){
    var tecla = e.charCode;
    var grafia = String.fromCharCode(tecla);
    var base = obj.value;

    //return e.
    comprobador(base, grafia);
    //obj.value;


   }

   function comprobador(base, grafia){
        comprueba = true;
        if ((base === "binario")&&((grafia != "0")&&(grafia != "1"))) {
            alert("este caracter no esta en "+grafia);
            textoOrigen = document.getElementById("numero").value;
            comprueba = false;
        }


   }

   /*   

        Nota: para terminar el ejerciciosar 
        expresiones regulares para las comprobaciones 
        y modificar el evento para que las grafias 
        que no son correctas no se escriban


    */



}






