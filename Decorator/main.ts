import { Milk, Mocha } from "./src/condiments";
import { Decaf, Expresso } from "./src/drinks";

class Main {
  constructor() {
    /* order for deacf with milk and mocha  */
    let decaf = new Decaf();
    decaf = new Mocha(decaf);
    decaf = new Milk(decaf);
    console.log("Order 1 ..");
    console.log(`Name: ${decaf.getDescription()}`);
    console.log(`Cost: ${decaf.cost()} Rs`);

    console.log("-----------------------------");
    /*order for expresso with double mocha  */
    let expresso = new Expresso();
    expresso = new Mocha(expresso);
    expresso = new Mocha(expresso);
    console.log("Order 2 ..");
    console.log(`Name: ${expresso.getDescription()}`);
    console.log(`Cost: ${expresso.cost()} Rs`);
  }
}

new Main();
