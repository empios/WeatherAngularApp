import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMappedHourlyData, IWeatherData} from "../types/WeatherType";

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent {
  constructor() {
  }

  @Input() searchedCity: string = '';
  @Input() weatherData: IWeatherData | null = null;
  @Output() weatherChange = new EventEmitter<IWeatherData | null>();
  mappedHourlyData: IMappedHourlyData[] = [];
  iconClass: string = '';
  windIconClass: string = '';
  windSpeedIconClass: string = '';

  ngOnInit(): void {
    const hour = new Date().getHours() + 1;
    if (this.weatherData) {
      this.iconClass = 'weather-wind__icon wi wi-wmo4680-' + this.weatherData.current_weather.weathercode.toString();
      this.windIconClass = 'weather-wind__icon wi wi-wind towards-' + this.weatherData.current_weather.winddirection.toString() + '-deg';
      this.windSpeedIconClass = 'weather-wind__icon wi wi-wind-beaufort-' + this.weatherData.current_weather.windspeed.toFixed(0).toString();
      const hourlyData = this.weatherData.hourly;
      for (let i = hour; i < hour + 5; i++) {
        this.mappedHourlyData.push({
          hour: new Date(hourlyData.time[i]).toLocaleTimeString('pl', {
            timeStyle: 'short',
            hour12: false,
            timeZone: 'UTC'
          }),
          temperature: hourlyData.temperature_2m[i]
        });
      }
    }
  }

  clearWeatherData() {
    this.weatherChange.emit(null);
  }

}
