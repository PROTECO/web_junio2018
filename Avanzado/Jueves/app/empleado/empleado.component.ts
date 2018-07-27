import { Component } from '@angular/core';

@Component({
	selector:'empleado',
	templateUrl:'./empleado.component.html'	
})

export class EmpleadoComponent{
	public nombre_componente = 'Componente de empleado';
	public nombre_empleado = 'Jorge Chávez';
}