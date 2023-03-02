import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {IWeatherData} from "../types/WeatherType";

@Component({
  selector: 'app-weather-input',
  templateUrl: './weatherinput.component.html',
  styleUrls: ['./weatherinput.component.scss']
})
export class WeatherinputComponent {
  constructor(private weatherService: WeatherService) {}
  @Input() searchedCity: string = '';
  @Output() searchedCityChange = new EventEmitter<string>();
  @Output() weatherChange = new EventEmitter<IWeatherData>();

  getWeather(): void {
    this.weatherService.getWeatherForCity(this.searchedCity).subscribe(
      {
        next: (response) => {
          this.weatherChange.emit(response)
        }
      }
    );
  }
}
