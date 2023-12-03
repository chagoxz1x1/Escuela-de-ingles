import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoWEB;'
  
  ngOnInit() {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
  }


// ngOinit():void{
//   AOS.init();
// export class AppComponent {
//   title = 'proyectoWEB';
// }
