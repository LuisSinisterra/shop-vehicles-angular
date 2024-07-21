import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bike } from '../bikes/bikes-interface';
import { bikesList } from '../bikes/bikes.mock';

@Component({
  selector: 'app-bikes-detail',
  templateUrl: './bikes-detail.component.html',
  styleUrls: ['./bikes-detail.component.css']
})
export class BikesDetailComponent implements OnInit{

  bikesList: Bike[] = bikesList;
  bike?: Bike;

  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.bike = this.bikesList.find(bike => bike.id == params['bikeId']);
    })
  }

}
