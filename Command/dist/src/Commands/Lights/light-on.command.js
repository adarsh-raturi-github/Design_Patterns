"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOnCommand = void 0;
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
    undo() {
        this.light.off();
    }
}
exports.LightOnCommand = LightOnCommand;
