"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const condiments_1 = require("./src/condiments");
const drinks_1 = require("./src/drinks");
class Main {
    constructor() {
        /* order for deacf with milk and mocha  */
        let decaf = new drinks_1.Decaf();
        decaf = new condiments_1.Mocha(decaf);
        decaf = new condiments_1.Milk(decaf);
        console.log("Order 1 ..");
        console.log(`Name: ${decaf.getDescription()}`);
        console.log(`Cost: ${decaf.cost()} Rs`);
        console.log("-----------------------------");
        /*order for expresso with double mocha  */
        let expresso = new drinks_1.Expresso();
        expresso = new condiments_1.Mocha(expresso);
        expresso = new condiments_1.Mocha(expresso);
        console.log("Order 2 ..");
        console.log(`Name: ${expresso.getDescription()}`);
        console.log(`Cost: ${expresso.cost()} Rs`);
    }
}
new Main();
