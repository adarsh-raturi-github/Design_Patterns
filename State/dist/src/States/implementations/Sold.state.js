"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldState = void 0;
class SoldState {
    constructor(gumballMachine) {
        this.gumBallMachine = gumballMachine;
    }
    insertCoin() {
        console.log("Please wait we are giving you gumball..");
    }
    ejectCoin() {
        console.log("Can't eject you have already turn the crank");
    }
    turnCrank() {
        console.log("Turning twice doesn't get you another gumball");
    }
    dispense() {
        this.gumBallMachine.releaseBall();
        if (this.gumBallMachine.getGumBallsCount() > 0) {
            //move to noquater state
            this.gumBallMachine.setState(this.gumBallMachine.getNoQuaterState());
            console.log("Hope you will have happy day after having this");
        }
        else {
            //move to soldout state
            this.gumBallMachine.setState(this.gumBallMachine.getSoldOutState());
            console.log("No gumballs left");
        }
    }
    refill() { }
}
exports.SoldState = SoldState;
