import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { CarsDetailComponent } from './components/cars-detail/cars-detail.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BikesDetailComponent } from './components/bikes-detail/bikes-detail.component';
import { SportsComponent } from './components/sports/sports.component';
import { HomeComponent } from './components/home/home.component';
import { SportsDetailComponent } from './components/sports-detail/sports-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:carId', component: CarsDetailComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'bikes/:bikeId', component: BikesDetailComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'sports/:sportId', component: SportsDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
