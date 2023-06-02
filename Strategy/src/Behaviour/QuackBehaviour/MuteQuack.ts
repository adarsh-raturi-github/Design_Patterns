import { QuackBehaviour } from "./interfaces/QuackBehaviour";

export class MuteQuack implements QuackBehaviour {
  quack(): void {
    console.log("I can't quack ...");
  }
}
