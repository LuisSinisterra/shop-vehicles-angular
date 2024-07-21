import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mensajeBienvenida: string = 'Bienvenidos a una pequeña app web.';
  mensaje: string = ' Hecha con Angular 16';

}
