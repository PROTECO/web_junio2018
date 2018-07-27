<?php
	//comentario una linea variables
	/*
		varias lineas 
	*/
	$destino="juliocesar.proteco@gmail.com";
	$nombre=$_POST["nombre"];
	$correo=$_POST["correo"];
	$mensaje=$_POST["mensaje"];
	$contenido="Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
	mail($destino,"Correo",$contenido);
	header("Location: index.html");
?>