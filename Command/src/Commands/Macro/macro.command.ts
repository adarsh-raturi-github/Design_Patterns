import { CommandInterface } from "../interfaces/command.interface";
//This is for party mode,multiple command execute using just one click
export class MacroCommand implements CommandInterface {
  constructor(private readonly commands: CommandInterface[]) {}
  execute(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }
  undo(): void {
    for (let i = this.commands.length - 1; i >= 0; i--) {
      this.commands[i].undo();
    }
  }
}
