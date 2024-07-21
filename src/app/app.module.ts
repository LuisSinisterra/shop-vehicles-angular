import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { SportsComponent } from './components/sports/sports.component';
import { SportsDetailComponent } from './components/sports-detail/sports-detail.component';
import { BikesDetailComponent } from './components/bikes-detail/bikes-detail.component';
import { CarsDetailComponent } from './components/cars-detail/cars-detail.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BikesComponent,
    SportsComponent,
    SportsDetailComponent,
    BikesDetailComponent,
    CarsDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
