window.onclick = function(e){


	// las x y y son las posiciones de donde esta el raton al hacer click
	var x = e.clientX;
	var y = e.clientY;

	// los sx y sy son screenX y screenY
	var sx = screen.width;
	var sy = screen.height;

	//alert(x+","+y);

	if (((sx/2)>x)&&((sy/2)>y)) {     

		alert("Arriba-Izquierda");

	}
	else if (((sx/2)<x)&&((sy/2)>y)) {

		alert("Arriba-Derecha");

	}
	else if (((sx/2)>x)&&((sy/2)<y)) {

		alert("Abajo-Izquierda");

	}
	else if (((sx/2)<x)&&((sy/2)<y)) {

		alert("Abajo-Derecha");

	}



}