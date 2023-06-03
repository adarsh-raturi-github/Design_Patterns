import { CommandInterface } from "./interfaces/command.interface";

export class NoCommand implements CommandInterface {
  execute() {
    console.log("Slot is empty");
  }
  undo(): void {
    console.log("Slot is empty");
  }
}
