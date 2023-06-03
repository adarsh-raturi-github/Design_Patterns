"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FanOffCommand = void 0;
class FanOffCommand {
    constructor(fan) {
        this.fan = fan;
    }
    execute() {
        this.prevspeed = this.fan.getSpeed();
        this.fan.off();
    }
    undo() {
        if (this.prevspeed === 2 /* FAN_SPEED.HIGH */) {
            this.fan.high();
        }
        else if (this.prevspeed === 0 /* FAN_SPEED.LOW */) {
            this.fan.low();
        }
        else if (this.prevspeed === 1 /* FAN_SPEED.MEDIUM */) {
            this.fan.medium();
        }
        else {
            this.fan.off();
        }
    }
}
exports.FanOffCommand = FanOffCommand;
