//Comentario de una línea
/*Comentario largo*/
console.log("Hola mundo de JS")
var x=5;
var y=10.5;
var texto="100";
var z = 100;
/*
console.log("El resultado de la suma es: ",x+y);
console.log("El resultado de la resta es: ",x-y);
console.log("El resultado de la multi es: ",x*y);
console.log("El resultado de la div es: ",x/y);
console.log("Tipado débil:",x-texto);
console.log("El modulo de 100 es: ",z%2);
*/
a = 1;
b = 1;
document.write(1!=true);
document.write("<br>");
document.write(1==true);
document.write("<br>");
document.write(1===true);
document.write("<br>");
document.write(0===false);
document.write("<br>");
document.write(a===b)
document.write("<br>");

//and ambos deben cumplirse
document.write(1==true && 0==false);
document.write("<br>");
//or con que uno se cumpla
document.write(1==true || 0==false);
document.write("<br>");
//not
document.write(!true);
document.write("<br><br>"+("Z"<"z")+"<br>");

//Arrays o listas
var arr1 = [1,2,3,4,5]
/*
console.log(arr1)
//Arreglo vacío
var arr2 = []
console.log(arr2)
//Con el método push agregamos datos a un arreglo
arr2.push("Uno")
arr2.push("Dos")
arr2.push("Tres")
arr2.push("Cuatro")
console.log(arr2)
//El método join, me ayuda a separar mi arreglo por algún caracter
console.log(arr1.join(" "))
//El método pop, elimina el último elemento de la lista
console.log(arr2.pop());
console.log(arr1.splice(2,1));
console.log(arr1.length) //Longitud del arreglo
var desordenado = [4,1,9,3,8,2,5,7,6];
console.log(desordenado.join(" "));
var ordenado = desordenado.sort()
console.log(ordenado.join(" "))
var mayor_a_menor = ordenado.reverse()
console.log(mayor_a_menor.join(" "))

//Accediendo a los datos del arreglo
console.log(arr1[1]);
console.log(arr2[0]);
*/
//Otra forma de crear arreglos

var equipos = new Array("E1","E2","E3","E4",100,200);
//console.log(equipos[4]+5);
//console.log(equipos[0]+equipos[1]);
//Funciones
var resultado;
function sumar(a,b){
	resultado = a+b
	return resultado
}
res = sumar(10,100)
console.log(res)
/*
aceptar = alert("Hola, soy un alert")
console.log(aceptar)
opcion =confirm("¿Te quiéres ganar un aifon?")
console.log(opcion)

nombre = prompt("Ingresa tu nombre")
console.log("Hola, ",nombre)
*/

//Sentencias de control
//IF
/*
var edad = prompt("Ingresa tu edad: ")

if(edad<18){
	alert("Estas chavo!");
}
else if(edad<=30){
	alert("Chavo ruco");
}
else if(edad<60){
	alert("Adulto");
}
else{
	alert("Eres abuelito")
}
*/
//FOR

var frutas=["piña","fresa","melon","pera"];
/*
for(i=0;i<frutas.length;i++){
	document.write(frutas[i]+"<br>");
}
*/
//WHILE
/*
var i = 0;
while(i<frutas.length){
	document.write(frutas[i]+"<br>");
	i++;
}
*/
//POO con JS

function Persona(edad,nombre,estatura){
	//Atributos
	this.edad = edad;
	this.nombre = nombre;
	this.estatura = estatura;
	//Métodos
	this.saludar = function(){
		alert("Hola soy: "+this.nombre+" y tengo "+this.edad);
	}
}

var Barcenitas = new Persona(19,"Barcenitas",1.62);

Barcenitas.saludar();
console.log(Barcenitas.estatura);



























