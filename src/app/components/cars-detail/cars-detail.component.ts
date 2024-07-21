import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carsList } from '../cars/cars.mock';
import { Car } from '../cars/cars-interface';


@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit{

  carsList: Car[] = carsList;
  car?: Car;

  constructor(private _route: ActivatedRoute){}  

  ngOnInit(): void {
   this._route.params.subscribe(params => {
     this.car = this.carsList.find(car => car.id == params['carId']);
   });
  }

}
