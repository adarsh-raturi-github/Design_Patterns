import { WeatherStation } from "./src/implementations";
import { CurrentConditionDisplay } from "./src/implementations/displays/current-condition-display";
import { ForecastConditionDisplay } from "./src/implementations/displays/forecast-condtion-display";
import { WeatherDataModel } from "./src/interfaces/models";

class Main {
  // intialize weather station
  weatherStation = new WeatherStation();

  setDisplayElements() {
    new CurrentConditionDisplay(this.weatherStation);
    new ForecastConditionDisplay(this.weatherStation);
  }

  setMeasurements() {
    this.weatherStation.setMeasurements(new WeatherDataModel(25, 45, 1006));
    console.log("------------------------------------------------- ");
    this.weatherStation.setMeasurements(new WeatherDataModel(3, 25, 1006));
  }
}

const main = new Main();
main.setDisplayElements();
main.setMeasurements();
