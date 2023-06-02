import { FlyBehaviour } from "./interfaces/FlyBehaviour";

export class NoFly implements FlyBehaviour {
  fly() {
    console.log("I can't fly.....");
  }
}
