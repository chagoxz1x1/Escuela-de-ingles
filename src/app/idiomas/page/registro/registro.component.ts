import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  passwordInvalid: boolean = false;
  passwordRequirements: string[] = [];
  hidePassword: boolean = true;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  submitForm() {
    // Validación de contraseña
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    const regexSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const consecutiveNumbers = /\d{2,}/;
    const consecutiveLetters = /([a-zA-Z])\1{1,}/;

    this.passwordRequirements = [];

    if (this.password.length !== 8) {
      this.passwordRequirements.push('debe tener exactamente 8 caracteres');
    }

    if (!regexUpperCase.test(this.password)) {
      this.passwordRequirements.push('al menos una mayúscula');
    }
    if (!regexLowerCase.test(this.password)) {
      this.passwordRequirements.push('al menos una minúscula');
    }
    if (!regexSpecialChar.test(this.password)) {
      this.passwordRequirements.push('al menos un carácter especial');
    }
    if (consecutiveNumbers.test(this.password)) {
      this.passwordRequirements.push('no números consecutivos');
    }
    if (consecutiveLetters.test(this.password)) {
      this.passwordRequirements.push('no letras consecutivas en el alfabeto');
    }

    this.passwordInvalid = this.passwordRequirements.length > 0;

    // Si la contraseña no cumple con los requisitos, no se enviará el formulario
    if (this.passwordInvalid) {
      return;
    }

    // Continuar con el registro
    const userData = {
      nombre: this.nombre,
      email: this.email,
      contrasena: this.password
    };

    console.log('Datos del usuario a registrar:', userData);

    // Llamar al método del servicio para realizar el registro
    this.usuarioService.crearUsuario(userData).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa del servidor aquí
        this.mostrarMensajeExitoso();
        // Limpiar el formulario después de un registro exitoso
        this.nombre = '';
        this.email = '';
        this.password = '';

        // Redirigir al usuario a la página de verificación
        this.router.navigate(['/Registro/verificar']);
      },
      (error: any) => {
        // Manejar errores aquí, como mostrar un mensaje de error al usuario
        console.error('Error en el registro', error);
        // Puedes mostrar un mensaje de error al usuario aquí
        if (error.status === 409) { // Por ejemplo, si el servidor devuelve el código 409 Conflict
          this.mostrarErrorUsuarioExistente();
        } else if (error.status === 500) { // Otros errores del servidor
          this.mostrarErrorGenerico();
        } else {
          // Manejar otros códigos de estado de error si es necesario
          this.mostrarErrorGenerico();
        }
      }
    );
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  mostrarMensajeExitoso() {
    // Implementa la lógica para mostrar un mensaje de éxito al usuario
    alert('Registro exitoso. Se ha enviado un correo de verificación a su dirección de correo electrónico.');
  }

  mostrarErrorUsuarioExistente() {
    // Implementa la lógica para mostrar un mensaje de error de usuario existente
    alert('El usuario ya existe. Por favor, inicie sesión en su cuenta existente o verifique su correo electrónico.');
  }

  mostrarErrorGenerico() {
    // Implementa la lógica para mostrar un mensaje de error genérico
    alert('Se produjo un error durante el registro. Por favor, inténtelo nuevamente.');
  }
}
