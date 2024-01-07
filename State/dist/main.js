"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GumBallMachine_1 = require("./src/GumBallMachine");
class Main {
    constructor() {
        const gumballMachine = new GumBallMachine_1.GumballMachine(10);
        gumballMachine.insertCoin();
        gumballMachine.turnCrank();
        console.log("---------------------------");
        gumballMachine.insertCoin();
        gumballMachine.turnCrank();
        console.log("---------------------------");
        // with no coin eject and turn the crank
        gumballMachine.ejectCoin();
        gumballMachine.turnCrank();
        console.log("---------------------------");
        // first inserting coin and than eject and than turn crank twice
        gumballMachine.insertCoin();
        gumballMachine.ejectCoin();
        gumballMachine.turnCrank();
        gumballMachine.turnCrank();
        console.log("----------------------------");
        // turning the crank with no coin
        gumballMachine.turnCrank();
    }
}
new Main();
