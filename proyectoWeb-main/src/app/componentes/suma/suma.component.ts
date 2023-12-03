import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  numero1 = 0;
  numero2 = 0;
  resultado = '';

  constructor(private http: HttpClient) { }

  sumar() {
    this.http.get(`http://localhost:3000/api/operaciones/suma?numero1=${this.numero1}&numero2=${this.numero2}`)
      .subscribe((res: any) => {
        this.resultado = res.resultado;
      });
  }
}
