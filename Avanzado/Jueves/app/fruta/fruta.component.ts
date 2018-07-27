import { Component } from '@angular/core';
//
/*template:`{{ nombre_componente }} <h1>Mi frutería</h1>`*/
@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public naranja = 'Soy una naranja';
	public pera = 'Soy una pera';
	public mandarina = 'Soy una mandarina';
	//Tipos de datos
	public nombre:string;
	public edad:number = 22;
	public mayorEdad:boolean;
	public trabajos:Array<any>;
	public comodin:<any>;

	constructor(){
		this.nombre = 'Jorge Chávez';
		this.edad = 52;
		this.mayorEdad = true;
		this.trabajos  = ['Desarrollador','Instructor',3.14];
		this.comodin = 'Cualquier tipo de dato';
		
	}
	ngOnInit(){
		//this.saludar('Barcenitas');
		this.cambiarEdad(22);
		console.log(this.nombre,this.edad);
		//Variables y alcance

		var uno = 10;
		var dos = 200;

		if(uno === 10){
			let uno = 2;
			var dos = 99;
			console.log("Dentro del if: "+uno+" "+dos);
		}
		console.log("Fuera del if: "+uno+" "+dos);
	}

	cambiarEdad(edad){
		this.edad = edad
	}
	saludar(nombre){
		alert("Hola "+ nombre)
	}







}
