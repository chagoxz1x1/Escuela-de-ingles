import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: []
})
export class VerificarCorreoComponent implements OnInit {
  verificationMessage: string = ''; // Mensaje de confirmación

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Obtener el token de la URL
    this.route.queryParams.subscribe((params: any) => {
      const token = params['token'];

      // Realizar una solicitud al servicio para verificar el token
      this.usuarioService.verificarToken(token).subscribe(
        (response: any) => {
          // La verificación fue exitosa, ahora verifica el estado de cuenta_verificada
          if (response.cuenta_verificada === 1) {
            this.verificationMessage = '¡Su correo electrónico ha sido verificado con éxito!';
          } else {
            this.verificationMessage = 'Su correo electrónico ya ha sido verificado previamente.';
          }
        },
        (error: any) => {
          // La verificación falló
          this.verificationMessage = 'La verificación del correo electrónico ha fallado. Por favor, contacte al soporte.';
        }
      );
    });
  }
}
