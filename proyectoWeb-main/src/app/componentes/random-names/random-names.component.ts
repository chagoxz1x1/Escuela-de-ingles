import { Component } from '@angular/core';

@Component({
  selector: 'app-random-names',
  templateUrl: './random-names.component.html',
  styleUrls: ['./random-names.component.css']
})
export class RandomNamesComponent {
  nombresAleatorios: string[] = [
    "Juan",
    "María",
    "Carlos",
    "Ana",
    "Pedro"
  ];
  resultado: string | null = null;
  mostrarContenido: boolean = false;

  mostrarNombre(nombre: string): void {
    this.resultado = nombre;
    this.mostrarContenido = true;
  }

  ocultarContenido(): void {
    this.mostrarContenido = false;
  }
}
