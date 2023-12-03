import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordError: string = '';

  register() {
    // Validación de la contraseña
    if (!this.isPasswordValid()) {
      return;
    }

    // Aquí deberías enviar los datos al backend para almacenarlos en la base de datos
    // Puedes usar Angular HttpClient o cualquier otra forma de enviar datos al servidor
    // Ejemplo ficticio:
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: 'usuario' // Asignar el rol 'usuario'
    };

    // Aquí llamarias a tu servicio HTTP para enviar userData al backend
    console.log('Datos a enviar al backend:', userData);
  }

  isPasswordValid(): boolean {
    // Validación de la contraseña según tus requisitos
    const regexConsecutiveNumbers = /\d{2,}/;
    const regexConsecutiveLetters = /([a-zA-Z])\1+/;

    if (this.password.length < 8) {
      this.passwordError = 'La contraseña debe tener al menos 8 caracteres.';
      return false;
    }

    if (!/[A-Z]/.test(this.password)) {
      this.passwordError = 'La contraseña debe contener al menos una mayúscula.';
      return false;
    }

    if (!/[a-z]/.test(this.password)) {
      this.passwordError = 'La contraseña debe contener al menos una minúscula.';
      return false;
    }

    if (!/[^a-zA-Z0-9]/.test(this.password)) {
      this.passwordError = 'La contraseña debe contener al menos un carácter especial.';
      return false;
    }

    if (regexConsecutiveNumbers.test(this.password)) {
      this.passwordError = 'La contraseña no puede tener números consecutivos.';
      return false;
    }

    if (regexConsecutiveLetters.test(this.password)) {
      this.passwordError = 'La contraseña no puede tener letras consecutivas.';
      return false;
    }

    // Si la contraseña pasa todas las validaciones, limpia el mensaje de error
    this.passwordError = '';
    return true;
  }
}
