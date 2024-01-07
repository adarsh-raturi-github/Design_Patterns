"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinnerState = void 0;
class WinnerState {
    constructor(gumballMachine) {
        this.gumBallMachine = gumballMachine;
    }
    insertCoin() {
        console.log("You can't insert a 1 Rs, the machine giving you gumball");
    }
    ejectCoin() {
        console.log("You can't eject, you have already turn the crank");
    }
    turnCrank() {
        console.log("You already turn crank ");
    }
    dispense() {
        this.gumBallMachine.releaseBall();
        if (this.gumBallMachine.getGumBallsCount() === 0) {
            this.gumBallMachine.setState(this.gumBallMachine.getSoldOutState());
        }
        else {
            console.log("You are lucky winner getting another gumball");
            this.gumBallMachine.releaseBall();
            if (this.gumBallMachine.getGumBallsCount() === 0) {
                console.log("No gumballs..");
                this.gumBallMachine.setState(this.gumBallMachine.getSoldOutState());
            }
            else {
                this.gumBallMachine.setState(this.gumBallMachine.getNoQuaterState());
            }
        }
    }
    refill() {
        this.gumBallMachine.setState(this.gumBallMachine.getNoQuaterState());
    }
}
exports.WinnerState = WinnerState;
