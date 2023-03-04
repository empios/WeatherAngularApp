import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of, switchMap} from "rxjs";
import {IGeolocationData, IWeatherData} from "../types/WeatherType";
import {getCurrentDateISO} from "../utils/Date";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {
  }

  getGeolocation(city: string): Observable<IGeolocationData> {
    return this.http.get<IGeolocationData>(environment.geolocationApiBaseUrl + city + '&count=1');
  }

  getWeatherData(lat: number, lon: number): Observable<IWeatherData> {
    return this.http.get<IWeatherData>(environment.weatherApiBaseUrl + lat + '&longitude=' + lon + '&hourly=temperature_2m&current_weather=true&start_date=' + getCurrentDateISO() + '&end_date=' + getCurrentDateISO());
  }

  getWeatherForCity(city: string): Observable<string | IWeatherData> {
    return this.getGeolocation(city).pipe(
      switchMap((response) => {
        if (!response.results) {
          return of('No results found');
        }
        const resultValue = response.results[0];
        return this.getWeatherData(resultValue.latitude, resultValue.longitude)
      })
    )
  }
}
