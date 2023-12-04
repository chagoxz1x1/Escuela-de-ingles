import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent {
  aceptoTerminos: boolean = false;
  botonHabilitado: boolean = false;


  // Método que se llama cuando se hace clic en el checkbox
  onCheckboxChange() {
    this.botonHabilitado = this.aceptoTerminos;
  }
}
