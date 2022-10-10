export interface WeatherFromAPIInterface {
    city: string,
    country: string,
    weatherRecords?: WeatherRecordForAPI[]
}

export interface WeatherRecordForAPI {
    dateTime: string,
    description: string,
    currTemperature: number,
    minTemperature: number,
    maxTemperature: number,
    feelsLike: number,
}
