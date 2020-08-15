import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService extends DataService {
  constructor(http: HttpClient) {
    super(http);
  }
  getCurrentWeather(cityName: string) {
    return this.get(
      `/weather?q=${cityName}&appid=${environment.APIKey}&units=${environment.temperatureUnit}`
    );
  }
}
