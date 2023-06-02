import { FlyWithWings } from "../Behaviour/FlyBehaviour/Fly_With_Wings";
import { SqueakQuack } from "../Behaviour/QuackBehaviour/SqueakQuack";
import { Duck } from "../Duck";

export class RedHeadDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new SqueakQuack();
  }
  public display(): void {
    // just for fun ,plz dont be offended
    console.log("I am RedHead Duck , i am TOP G");
  }
}
