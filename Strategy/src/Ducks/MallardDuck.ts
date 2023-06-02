import { FlyWithWings } from "../Behaviour/FlyBehaviour/Fly_With_Wings";
import { LoudQuack } from "../Behaviour/QuackBehaviour/LoudQuack";
import { Duck } from "../Duck";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new LoudQuack();
  }

  public display(): void {
    console.log("Hi....... I am mallard duck");
  }
}
