import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './idiomas/page/home-page/home-page.component';
import { LoginComponent } from './idiomas/page/login/login.component';
import { RegistroComponent } from './idiomas/page/registro/registro.component';
import { VerificarCorreoComponent } from './idiomas/page/verificar-correo/verificar-correo.component';


const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' }, // Ruta por defecto
  { path: 'Home', component: HomePageComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registro/verificar', component: VerificarCorreoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
