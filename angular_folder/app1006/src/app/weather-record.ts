export interface WeatherRecord {
    number: number,
    name: string,
    startTime: Date,
    endTime: Date,
    isDaytime: string, 
    temperature: string,
    temperatureUnit: string,
    temperatureTrend: string,
    windSpeed:  string,
    windDirection:  string,
    icon: string,
    shortForecast: string,
    detailedForecast: string
  }