import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IdiomasRoutingModule } from './idiomas-routing.module';
import { HomePageComponent } from './page/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    IdiomasRoutingModule
  ],


})
export class IdiomasModule { }
