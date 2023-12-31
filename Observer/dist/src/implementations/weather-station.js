"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
class WeatherStation {
    constructor() {
        this.observers = [];
    }
    removeObserver(observer) {
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
    registerObserver(observer) {
        this.observers.push(observer);
    }
    measurementsChanged() {
        this.notifyObservers();
    }
    setMeasurements(data) {
        this.weatherData = {
            temperature: data.temperature,
            humidity: data.humidity,
            pressure: data.pressure,
        };
        this.measurementsChanged();
    }
}
exports.WeatherStation = WeatherStation;
