export interface ICityData {
  name: string,
  country: string,
  latitude: number,
  longitude: number,
  timeZone: string
}

export interface IGeolocationData {
  generationtime_ms: number,
  results: ICityData[]
}

export interface IMappedHourlyData {
  hour: string,
  temperature: number
}

export interface IWeatherData {
  latitude: number,
  longitude: number,
  timezone: string,
  current_weather: {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number,
    time: string
  }
  hourly: {
    time: Array<string>
    temperature_2m: Array<number>
  }
}

