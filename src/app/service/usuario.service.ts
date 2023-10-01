import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000'; // Ruta base de la API

  private token: string = '';

  setToken(newToken: string) {
    this.token = newToken;
    console.log('Token establecido:', this.token);
  }

  getToken() {
    console.log('Obteniendo token:', this.token);
    return this.token;
  }

  // Método para verificar el token actual
  verificarToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Realiza una solicitud HTTP aquí para verificar el token
    // Debe devolver un observable
    return this.http.get(`${this.apiUrl}/ruta-para-verificar-token`, { headers });
  }


  // Método para realizar una solicitud HTTP con el token actual
  realizarSolicitudConToken(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${this.apiUrl}/${url}`, { headers });
  }

  constructor(private http: HttpClient) {}

  iniciarSesion(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/iniciar-sesion`, userData).pipe(
      switchMap((response: any) => {
        // Verificar si el usuario ha sido verificado
        if (response.verificado) {
          // Usuario verificado, establecer el token si es necesario
          if (response.token) {
            this.setToken(response.token);
          }
          return of(response); // Continuar con la respuesta
        } else {
          // Usuario no verificado, lanzar un error
          return throwError('El usuario no ha sido verificado');
        }
      })
    );
  }

  getAllUsuarios(): Observable<any> {
    return this.realizarSolicitudConToken('api/usuarios/usuarios');
  }

  // Nuevo método para verificar la existencia de un usuario por correo electrónico
  verificarExistenciaUsuario(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/verificar-usuario`, { email });
  }

  // Método para crear un nuevo usuario después de verificar su existencia
  crearUsuario(data: any): Observable<any> {
    return this.verificarExistenciaUsuario(data.email).pipe(
      switchMap((res) => {
        if (res.mensaje === 'Usuario encontrado') {
          return throwError('El usuario ya existe');
        } else {
          // Si el usuario no existe, crea uno nuevo
          return this.http.post(`${this.apiUrl}/api/usuarios/usuarios`, data);
        }
      }),
      catchError((error) => throwError(error))
    );
  }

  postDatos(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    // Realiza la solicitud HTTP con el token en los encabezados
    return this.http.post(this.apiUrl, userData, { headers: headers });
  }

  realizarSolicitudPostConToken(url: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    // Realiza la solicitud HTTP POST con el token en los encabezados
    return this.http.post(`${this.apiUrl}/${url}`, data, { headers });
  }
}
