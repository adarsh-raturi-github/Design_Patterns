"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOldOutState = void 0;
class SOldOutState {
    constructor(gumballMachine) {
        this.gumBallMachine = gumballMachine;
    }
    insertCoin() {
        console.log("You can't insert a 1 Rs, the machine is sold out");
    }
    ejectCoin() {
        console.log("You can't eject, you haven't inserted a 1 Rupee yet");
    }
    turnCrank() {
        console.log("You turn crank but we have no gumballs");
    }
    dispense() {
        console.log("No gumball..");
    }
    refill() {
        this.gumBallMachine.setState(this.gumBallMachine.getNoQuaterState());
    }
}
exports.SOldOutState = SOldOutState;
