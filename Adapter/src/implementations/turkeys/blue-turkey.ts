import { ITurkey } from "../../interfaces";

export class BlueTurkey implements ITurkey {
  gobble(): void {
    console.log("Blue Top G turkey gobble");
  }

  fly() {
    console.log("Blue Top G turkey flyiiiiiiiiing");
  }
}
