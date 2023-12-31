export class WeatherDataModel {
  temperature: number;
  pressure: number;
  humidity: number;

  constructor(temperature: number, pressure: number, humidity: number) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
  }
}
