import {Component} from '@angular/core';

import {IWeatherData} from "../types/WeatherType";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  constructor() {
  }

  searchedCity: string = '';
  weatherData: IWeatherData | null = null;

  weatherChange(weatherData: IWeatherData | null): void {
    this.weatherData = weatherData;
  }

  searchedCityChange(searchedCity: string): void {
    this.searchedCity = searchedCity;
  }
}
