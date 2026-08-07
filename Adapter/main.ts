import { TurkeyAdapter } from "./src/implementations/adapters/turkey.adapter";
import { MallardDuck } from "./src/implementations/ducks/Mallard.duck";
import { BlueTurkey } from "./src/implementations/turkeys/blue.turkey";
import { IDuck, ITurkey } from "./src/interfaces";

export default class Main {
  constructor() {
    let duck: IDuck = new MallardDuck();

    let turkey: ITurkey = new BlueTurkey();
    let turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

    console.log("The Turkey says...");
    turkey.gobble();
    turkey.fly();

    console.log("\nThe Duck says...");
    Main.testDuck(duck);

    console.log("\nThe TurkeyAdapter says...");
    Main.testDuck(turkeyAdapter);
  }

  public static testDuck(duck: IDuck): void {
    duck.quack();
    duck.fly();
  }
}

new Main();
