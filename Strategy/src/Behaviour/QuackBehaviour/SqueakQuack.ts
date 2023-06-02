import { QuackBehaviour } from "./interfaces/QuackBehaviour";

export class SqueakQuack implements QuackBehaviour {
  quack(): void {
    console.log("I make squeak quack....");
  }
}
