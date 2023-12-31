import { ObserverInterface, SubjectInterface } from "../interfaces";
import { WeatherDataModel } from "../interfaces/models";

export class WeatherStation implements SubjectInterface {
  private weatherData: WeatherDataModel;
  private observers: ObserverInterface[];
  constructor() {
    this.observers = [];
  }

  removeObserver(observer: ObserverInterface) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.weatherData);
    }
  }

  registerObserver(observer: ObserverInterface) {
    this.observers.push(observer);
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(data: WeatherDataModel) {
    this.weatherData = {
      temperature: data.temperature,
      humidity: data.humidity,
      pressure: data.pressure,
    };
    this.measurementsChanged();
  }
}
