"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitachiLight = void 0;
class HitachiLight {
    constructor(location) {
        this.location = location;
    }
    on() {
        console.log(`${this.location} light is on`);
    }
    off() {
        console.log(`${this.location} Light is off`);
    }
}
exports.HitachiLight = HitachiLight;
