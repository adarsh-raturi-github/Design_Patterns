"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentConditionDisplay = void 0;
class CurrentConditionDisplay {
    constructor(station) {
        // registering to weatherstation so that we can get updates
        station.registerObserver(this);
    }
    display() {
        console.log("Current conditions are .....");
        console.log(`Temperature---${this.temperature} Celsius`);
        console.log(`Pressure---${this.pressure} pascal`);
        console.log(`Humidity---${this.humidity} g/kg`);
    }
    update(data) {
        this.temperature = data.temperature;
        this.pressure = data.pressure;
        this.humidity = data.humidity;
        this.display();
    }
}
exports.CurrentConditionDisplay = CurrentConditionDisplay;
