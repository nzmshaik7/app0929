import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { WeatherFromAPIInterface, WeatherRecordForAPI } from '../weather-from-apiinterface';
import { WeatherRecord } from '../weather-record';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  temperatures: WeatherRecord[] = [];
  weatherRecordsFromAPI: WeatherRecordForAPI[] = [];
  forecastFromOpenAPI: WeatherFromAPIInterface = {
    city: '',
    country: 'US',
    weatherRecords: this.weatherRecordsFromAPI
  }
  

  ngOnInit() {

    this.getWeatherFromService();
    this.getWeatherFromAPIService();
  }

  getWeatherFromService() {
    this.apiService.getWeather().subscribe(
      (data: any) => {
        data.properties.periods.forEach((d:any) => this.temperatures.push(d))},
      error => console.log(`printingError: ${error}`)
    );
  }

  getWeatherFromAPIService() {
    this.apiService.getWeatherFromAPI().subscribe(
      data => {
        console.log(data),
        this.forecastFromOpenAPI.city = data.city.name,
        this.forecastFromOpenAPI.country = data.city.country,
        this.mapForecastFromOpenAPI(data.list),
        console.log('after'),
        console.log(this.forecastFromOpenAPI)
      },
      error => console.log(`printingError: ${error}`)
    );
  }

  mapForecastFromOpenAPI(dataList: any) {
    for(let d of dataList) {
      let localvar: WeatherRecordForAPI = {
        dateTime: '',
        description: '',
        currTemperature: 0,
        minTemperature: 0,
        maxTemperature: 0,
        feelsLike: 0,
      };
      localvar.currTemperature = d.main.temp;
      localvar.minTemperature = d.main.temp_min;
      localvar.maxTemperature = d.main.temp_max;
      localvar.feelsLike = d.main.feels_like;
      localvar.dateTime = d.dt_txt;
      localvar.description = d.weather[0].description;

      this.weatherRecordsFromAPI.push(localvar)
    }
    this.forecastFromOpenAPI.weatherRecords = this.weatherRecordsFromAPI
  }



}

