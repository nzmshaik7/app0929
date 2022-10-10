import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.weather.gov/gridpoints/DTX/65,33/forecast';

  getWeather(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
