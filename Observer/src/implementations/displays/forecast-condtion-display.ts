import { DisplayElementInterface, ObserverInterface } from "../../interfaces";
import { WeatherDataModel } from "../../interfaces/models";
import { WeatherStation } from "../weather-station";

export class ForecastConditionDisplay
  implements DisplayElementInterface, ObserverInterface
{
  private temperature: number;
  private pressure: number;
  private humidity: number;

  constructor(weatherStation: WeatherStation) {
    weatherStation.registerObserver(this);
  }
  display(): void {
    console.log("Forecast condtions are .....");
    console.log(`Temperature: ${this.temperature} celsius`);
    if (this.temperature < 5) {
      console.log("Cloudy-- stay at home");
    } else {
      console.log("Sunny -- just hit the beach");
    }
  }

  update(weatherData: WeatherDataModel) {
    this.pressure = weatherData.pressure;
    this.temperature = weatherData.temperature;
    this.humidity = weatherData.humidity;
    this.display();
  }
}
