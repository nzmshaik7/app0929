import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Secret } from './secret';

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
    const localapiUrl:string = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey: string = Secret.apikey;
    const zipCode: string = '77002';
    const units: string = 'imperial';
    return this.http.get(`${localapiUrl}?APPID=${apiKey}&zip=${zipCode}&units=${units}`);
  }

}
