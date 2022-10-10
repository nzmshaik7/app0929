import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { WeatherRecord } from '../weather-record';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  temperatures: WeatherRecord[] = [];

  ngOnInit() {

    this.getWeatherFromService();
  }

  getWeatherFromService() {
    this.apiService.getWeather().subscribe(
      (data: any) => {
        data.properties.periods.forEach((d:any) => this.temperatures.push(d))},
      error => console.log(`printingError: ${error}`)
    );
  }



}

