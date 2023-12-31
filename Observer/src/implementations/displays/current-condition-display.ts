import { DisplayElementInterface, ObserverInterface } from "../../interfaces";
import { WeatherDataModel } from "../../interfaces/models";
import { WeatherStation } from "../weather-station";

export class CurrentConditionDisplay
  implements DisplayElementInterface, ObserverInterface
{
  private temperature: number;
  private pressure: number;
  private humidity: number;

  constructor(station: WeatherStation) {
    // registering to weatherstation so that we can get updates
    station.registerObserver(this);
  }
  display() {
    console.log("Current conditions are .....");
    console.log(`Temperature---${this.temperature} Celsius`);
    console.log(`Pressure---${this.pressure} pascal`);
    console.log(`Humidity---${this.humidity} g/kg`);
  }

  update(data: WeatherDataModel) {
    this.temperature = data.temperature;
    this.pressure = data.pressure;
    this.humidity = data.humidity;
    this.display();
  }
}
