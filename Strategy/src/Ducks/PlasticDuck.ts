import { NoFly } from "../Behaviour/FlyBehaviour/No_Fly";
import { MuteQuack } from "../Behaviour/QuackBehaviour/MuteQuack";
import { Duck } from "../Duck";

export class PlasticDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new NoFly();
    this.quackBehaviour = new MuteQuack();
  }
  public display(): void {
    console.log("I am Plastic Duck");
  }
}
