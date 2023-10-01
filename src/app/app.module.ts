import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IdiomasModule } from './idiomas/idiomas.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './service/usuario.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IdiomasModule,
    HttpClientModule,

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
