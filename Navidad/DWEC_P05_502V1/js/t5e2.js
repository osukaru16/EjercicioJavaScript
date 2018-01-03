window.onload = function(){

//alert("ok");
vetanaTamanyo();
//document.oncontextmenu = function(){return false}
raton();

};

window.oncontextmenu = function(){
	clickD();
	//return false;
}
window.onclick = function(){
	clickI();
	
}

window.onresize = function(){
	vetanaTamanyo();
}

window.onmousemove = function(){
	posicionRaton(event);
};

window.onkeypress = function(){
	teclado(event);
}

function vetanaTamanyo(){
	var anchura = window.innerWidth;
	var altura = window.innerHeight;

	document.getElementsByTagName("p")[0].innerHTML = "Navegador ["+anchura+", "+altura+"]";
}

function posicionRaton(e) {
	var x = e.clientX;
	var y = e.clientY;
	document.getElementsByTagName("p")[1].innerHTML = "Pàgina ["+x+", "+y+"]";
}

function clickD(){
	raton();
	document.getElementsByTagName("p")[2].innerHTML ="Clic esquerre No";
	document.getElementsByTagName("p")[3].innerHTML ="Clic dret Si";
}

function clickI(){
	raton();
	document.getElementsByTagName("p")[3].innerHTML ="Clic dret No";
	document.getElementsByTagName("p")[2].innerHTML ="Clic esquerre Si";
}

function teclado(e) {
	//.fromCharCode(65);
    var tecla = e.charCode;
    document.getElementById("info").style.backgroundColor = "#CCE6FF";
    document.getElementsByTagName("h1")[0].innerHTML ="Teclat";

	/*
    document.getElementsByTagName("p")[0].innerHTML = "Caràcter["+String.fromCharCode(tecla)+"]";
    document.getElementsByTagName("p")[1].innerHTML = "Codi["+tecla+"]";
    document.getElementsByTagName("p")[2].innerHTML = "";
	document.getElementsByTagName("p")[3].innerHTML = "";
	*/

	document.getElementsByTagName("p")[2].innerHTML = "Caràcter["+String.fromCharCode(tecla)+"]";
    document.getElementsByTagName("p")[3].innerHTML = "Codi["+tecla+"]";
    document.getElementsByTagName("p")[0].style.display = "none";
	document.getElementsByTagName("p")[1].style.display = "none";


    //document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
}

function raton(){

	document.getElementById("info").style.backgroundColor = "#FFFFCB";
	document.getElementsByTagName("h1")[0].innerHTML ="Ratolí";
	document.getElementsByTagName("p")[0].style.display = "block";
	document.getElementsByTagName("p")[1].style.display = "block";


	/*vetanaTamanyo();
	posicionRaton(event);*/

}