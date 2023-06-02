import { QuackBehaviour } from "./interfaces/QuackBehaviour";

export class LoudQuack implements QuackBehaviour {
  quack(): void {
    console.log("I make LOOOOUD QUACK ....");
  }
}
