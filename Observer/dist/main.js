"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const implementations_1 = require("./src/implementations");
const current_condition_display_1 = require("./src/implementations/displays/current-condition-display");
const forecast_condtion_display_1 = require("./src/implementations/displays/forecast-condtion-display");
const models_1 = require("./src/interfaces/models");
class Main {
    constructor() {
        // intialize weather station
        this.weatherStation = new implementations_1.WeatherStation();
    }
    setDisplayElements() {
        new current_condition_display_1.CurrentConditionDisplay(this.weatherStation);
        new forecast_condtion_display_1.ForecastConditionDisplay(this.weatherStation);
    }
    setMeasurements() {
        this.weatherStation.setMeasurements(new models_1.WeatherDataModel(25, 45, 1006));
        console.log("------------------------------------------------- ");
        this.weatherStation.setMeasurements(new models_1.WeatherDataModel(3, 25, 1006));
    }
}
const main = new Main();
main.setDisplayElements();
main.setMeasurements();
