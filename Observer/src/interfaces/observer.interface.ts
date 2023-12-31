import { WeatherDataModel } from "./models";

export interface ObserverInterface {
  update(weatherData: WeatherDataModel): void;
}
