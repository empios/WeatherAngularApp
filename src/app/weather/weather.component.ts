import { Component } from '@angular/core';
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  constructor(private weatherService: WeatherService) {
  }
  searchedCity: string = '';

  getWeather(): void {
    this.weatherService.getGeolocation(this.searchedCity).subscribe(
      {
        next: (response) => {
          console.log(response);
        }
      }
    );
  }
}
