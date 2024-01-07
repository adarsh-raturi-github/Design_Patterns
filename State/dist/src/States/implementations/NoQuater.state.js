"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoQuaterState = void 0;
class NoQuaterState {
    constructor(gumballMachine) {
        this.gumBallMachine = gumballMachine;
    }
    insertCoin() {
        console.log("Coin Inserted..");
        this.gumBallMachine.setState(this.gumBallMachine.getHasQuaterState());
    }
    ejectCoin() {
        console.log("Coin not inserted, please add coin of 1 Rs ..");
    }
    turnCrank() {
        console.log("Can`t turn Please add coin of 1Rs..");
    }
    dispense() {
        console.log("Please pay 1 Rs..");
    }
    refill() { }
}
exports.NoQuaterState = NoQuaterState;
