import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://api.weather.gov/gridpoints/DTX/65,33/forecast';

  getWeather(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getWeatherFromAPI(): Observable<any> {
    const localapiUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=77002,us&APPID=61bad823a8a03402c4070934d47c16a0&units=us';
    return this.http.get(localapiUrl);
  }

}
