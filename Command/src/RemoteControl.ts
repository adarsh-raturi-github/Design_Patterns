import { CommandInterface } from "./Commands/interfaces/command.interface";
import { NoCommand } from "./Commands/no-command";

export class RemoteControl {
  private offCommands = new Array<CommandInterface>(4);
  private onCommands = new Array<CommandInterface>(4);
  private lastExecutedCommand: CommandInterface;

  constructor() {
    const noCommand = new NoCommand();
    this.lastExecutedCommand = noCommand;
    for (let i = 0; i < 4; i++) {
      this.offCommands[i] = noCommand;
      this.onCommands[i] = noCommand;
    }
  }

  public setCommand(
    slot: number,
    onCommand: CommandInterface,
    offCommand: CommandInterface
  ) {
    this.onCommands[slot - 1] = onCommand;
    this.offCommands[slot - 1] = offCommand;
  }

  public onButtonPress(slot: number) {
    this.onCommands[slot - 1].execute();
    this.lastExecutedCommand = this.onCommands[slot - 1];
  }

  public offButtonPress(slot: number) {
    this.offCommands[slot - 1].execute();
    this.lastExecutedCommand = this.offCommands[slot - 1];
  }

  public undoButtonPressed() {
    console.log("---Undo button Pressed----");
    this.lastExecutedCommand.undo();
  }
}
