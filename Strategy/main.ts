import { NoFly } from "./src/Behaviour/FlyBehaviour/No_Fly";
import { MuteQuack } from "./src/Behaviour/QuackBehaviour/MuteQuack";
import { Duck } from "./src/Duck";
import { MallardDuck } from "./src/Ducks/MallardDuck";
import { RedHeadDuck } from "./src/Ducks/RedHeadDuck";

class Main {
  duck!: Duck;

  constructor() {}

  showMallardDuck() {
    this.duck = new MallardDuck();
    // using default behaviour of duck
    this.duck.display();
    this.duck.performQuack();
    this.duck.performFly();
    // changing duck flying behaviour , now here comes use case of strategy pattern same can be done for quack behaviour
    this.duck.setFlyingBehaviuor(new NoFly());
    this.duck.performFly();
  }

  showRedHeadDuck() {
    console.log("---------------------------");
    this.duck = new RedHeadDuck();
    // using default behaviour of duck
    this.duck.display();
    this.duck.performQuack();
    this.duck.performFly();
    // changing duck quack behaviour , now here comes use case of strategy pattern same can be done for flying behaviour
    this.duck.setQuackBehaviour(new MuteQuack());
    this.duck.performQuack();
  }
}

const main = new Main();
main.showMallardDuck();
main.showRedHeadDuck();
