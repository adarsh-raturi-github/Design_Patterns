"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HavellsFan = void 0;
class HavellsFan {
    constructor(location) {
        this.location = location;
        this.speed = 3 /* FAN_SPEED.OFF */;
    }
    high() {
        this._isFanOn();
        this.speed = 2 /* FAN_SPEED.HIGH */;
        console.log(`${this.location} fan is set to high speed`);
    }
    medium() {
        this._isFanOn();
        this.speed = 1 /* FAN_SPEED.MEDIUM */;
        console.log(`${this.location} fan is set to medium speed`);
    }
    low() {
        this._isFanOn();
        this.speed = 0 /* FAN_SPEED.LOW */;
        console.log(`${this.location} fan is set to low speed`);
    }
    off() {
        this.speed = 3 /* FAN_SPEED.OFF */;
        console.log(`${this.location} fan is set to off`);
    }
    getSpeed() {
        return this.speed;
    }
    on() {
        console.log(`${this.location} fan is on..`);
    }
    _isFanOn() {
        if (this.speed === 3 /* FAN_SPEED.OFF */) {
            this.on();
        }
    }
}
exports.HavellsFan = HavellsFan;
