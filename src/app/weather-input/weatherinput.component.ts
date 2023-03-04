import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {IWeatherData} from "../types/WeatherType";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-weather-input',
  templateUrl: './weatherinput.component.html',
  styleUrls: ['./weatherinput.component.scss']
})
export class WeatherinputComponent {
  constructor(private weatherService: WeatherService) {
  }

  @Input() searchedCity: string = '';
  @Output() searchedCityChange = new EventEmitter<string>();
  @Output() weatherChange = new EventEmitter<IWeatherData>();
  error: string | null = null;

  getWeather(): void {
    this.weatherService.getWeatherForCity(this.searchedCity).subscribe(
      {
        next: (response) => {
          if (typeof response === 'string') {
            this.error = response;
            return;
          }
          this.error = null;
          this.weatherChange.emit(response)
        }
      }
    );
  }
}
