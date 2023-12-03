import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaProdComponent } from './vista-prod.component';



import { Component } from '@angular/core';

interface Producto {
  titulo: string;
  imagen: string;
  precio: string;
  descripcion: string;
}

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  contenidoVisible: string | null = null;

  productos: Producto[] = [
    {
      titulo: 'Producto 1',
      imagen: 'ruta-imagen-1.jpg',
      precio: '$15.000',
      descripcion: 'Este es el contenido exclusivo para el Producto 1.'
    },
    {
      titulo: 'Producto 2',
      imagen: 'ruta-imagen-2.jpg',
      precio: '$25.000',
      descripcion: 'Este es el contenido exclusivo para el Producto 2.'
    },
    // Agrega más productos aquí con sus respectivas descripciones
  ];

  mostrarContenido(id: string): void {
    this.contenidoVisible = id;
  }
}
