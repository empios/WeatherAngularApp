import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }
  getGeolocation(city: string) {
    return this.http.get(environment.geolocationApiBaseUrl+city+'&count=1')
  }
}
