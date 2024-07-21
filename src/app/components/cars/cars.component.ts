import { Component } from '@angular/core';
import { carsList } from './cars.mock';
import { Car } from './cars-interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carsList: Car[] = carsList;

}
