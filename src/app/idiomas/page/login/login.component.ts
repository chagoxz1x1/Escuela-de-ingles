import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  emailError: string = '';
  passwordError: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  submitForm() {
    // Limpiar mensajes de error al enviar un nuevo formulario
    this.emailError = '';
    this.passwordError = '';

    // Validar que se haya ingresado un correo y contraseña
    if (!this.email || !this.password) {
      this.emailError = 'Ingrese su correo electrónico';
      this.passwordError = 'Ingrese su contraseña';
      return;
    }

    const userData = { email: this.email, password: this.password };

    this.usuarioService.iniciarSesion(userData).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso', response);
        // Verificar si el usuario ha sido verificado
        if (response.verificado) {
          // Redirigir al usuario al componente de inicio después del inicio de sesión exitoso
          this.router.navigate(['/Home']);
        } else {
          console.log('El usuario no ha sido verificado', response);
          this.emailError = 'Su cuenta aún no ha sido verificada. Por favor, verifique su correo electrónico antes de iniciar sesión.';
        }
      },
      (error: any) => {
        console.error('Error al iniciar sesión', error);
        // Verificar el tipo de error y asignar mensajes de error adecuados
        if (error.status === 401) {
          // Error de credenciales incorrectas
          this.emailError = 'Correo o contraseña incorrectos';
          this.passwordError = 'Correo o contraseña incorrectos';
        } else {
          // Otro tipo de error
          this.emailError = 'Se produjo un error al iniciar sesión';
          this.passwordError = 'Se produjo un error al iniciar sesión';
        }
      }
    );
  }
}
