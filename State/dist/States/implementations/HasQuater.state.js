"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasQuaterState = void 0;
class HasQuaterState {
    constructor(gumballMachine) {
        this.gumBallMachine = gumballMachine;
    }
    insertCoin() {
        console.log("Coin already inserted..");
    }
    ejectCoin() {
        this.gumBallMachine.setState(this.gumBallMachine.getNoQuaterState());
        // just for fun it is added
        console.log("Coin ejected , PEHLI FURSAT ME NIKAL");
    }
    turnCrank() {
        this.gumBallMachine.setState(this.gumBallMachine.getSoldState());
        console.log("Please wait get your gumball");
    }
    dispense() {
        console.log("Please turn the crank");
    }
    refill() { }
}
exports.HasQuaterState = HasQuaterState;
