import { Component } from '@angular/core';
import { bikesList } from './bikes.mock';
import { Bike } from './bikes-interface';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {

  bikesList: Bike[] = bikesList;

}
