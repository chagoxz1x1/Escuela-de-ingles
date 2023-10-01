import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './page/home-page/home-page.component';

import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { VerificarCorreoComponent } from './page/verificar-correo/verificar-correo.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegistroComponent,
    VerificarCorreoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[UsuarioService]


})
export class IdiomasModule { }
