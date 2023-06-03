"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndoorOnLightCommand = void 0;
class IndoorOnLightCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
}
exports.IndoorOnLightCommand = IndoorOnLightCommand;
