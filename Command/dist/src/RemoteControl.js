"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
const no_command_1 = require("./Commands/no-command");
class RemoteControl {
    constructor() {
        this.offCommands = new Array(4);
        this.onCommands = new Array(4);
        const noCommand = new no_command_1.NoCommand();
        this.lastExecutedCommand = noCommand;
        for (let i = 0; i < 4; i++) {
            this.offCommands[i] = noCommand;
            this.onCommands[i] = noCommand;
        }
    }
    setCommand(slot, onCommand, offCommand) {
        this.onCommands[slot - 1] = onCommand;
        this.offCommands[slot - 1] = offCommand;
    }
    onButtonPress(slot) {
        this.onCommands[slot - 1].execute();
        this.lastExecutedCommand = this.onCommands[slot - 1];
    }
    offButtonPress(slot) {
        this.offCommands[slot - 1].execute();
        this.lastExecutedCommand = this.offCommands[slot - 1];
    }
    undoButtonPressed() {
        console.log("---Undo button Pressed----");
        this.lastExecutedCommand.undo();
    }
}
exports.RemoteControl = RemoteControl;
