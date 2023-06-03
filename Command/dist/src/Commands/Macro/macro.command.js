"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroCommand = void 0;
//This is for party mode,multiple command execute using just one click
class MacroCommand {
    constructor(commands) {
        this.commands = commands;
    }
    execute() {
        for (const command of this.commands) {
            command.execute();
        }
    }
    undo() {
        for (let i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo();
        }
    }
}
exports.MacroCommand = MacroCommand;
