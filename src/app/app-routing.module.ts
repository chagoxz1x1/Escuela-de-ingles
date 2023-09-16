import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './idiomas/page/home-page/home-page.component';

const routes: Routes = [

  {

      path: 'Home',
      component: HomePageComponent

  },
  {
    path:'**',
    redirectTo: 'Home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
