import { Component } from '@angular/core';
import { Empleado } from './Empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html',
	styleUrls: ['./empleado.component.css']
})


export class EmpleadoComponent{
	public nombre_componente = 'Componente empleados';
	public empleado:Empleado;
	public instructores:Array<Empleado>;
	public cambiador:boolean;
	constructor(){
		this.empleado = new Empleado('Jorge Chávez',22,'Instructor titular',true);
		this.instructores = [
				new Empleado('Julio Martínez',21,'Instructor adjunto',true),
				new Empleado('Erick Barcenitas',20,'Instructor auxiliar',false),
				new Empleado('Diego Bernal',20,'Instructor auxiliar',true)
							];
		this.cambiador = true;
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.instructores);
	}
	cambiar_mostrar(valor){
		this.cambiador = valor;
	}
}
