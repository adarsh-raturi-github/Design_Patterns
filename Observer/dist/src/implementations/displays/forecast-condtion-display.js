"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastConditionDisplay = void 0;
class ForecastConditionDisplay {
    constructor(weatherStation) {
        weatherStation.registerObserver(this);
    }
    display() {
        console.log("Forecast condtions are .....");
        console.log(`Temperature: ${this.temperature} celsius`);
        if (this.temperature < 5) {
            console.log("Cloudy-- stay at home");
        }
        else {
            console.log("Sunny -- just hit the beach");
        }
    }
    update(weatherData) {
        this.pressure = weatherData.pressure;
        this.temperature = weatherData.temperature;
        this.humidity = weatherData.humidity;
        this.display();
    }
}
exports.ForecastConditionDisplay = ForecastConditionDisplay;
