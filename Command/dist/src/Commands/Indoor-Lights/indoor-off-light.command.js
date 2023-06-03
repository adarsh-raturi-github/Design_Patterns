"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndoorLightOffCommand = void 0;
class IndoorLightOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.off();
    }
}
exports.IndoorLightOffCommand = IndoorLightOffCommand;
