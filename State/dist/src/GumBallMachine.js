"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GumballMachine = void 0;
const implementations_1 = require("./States/implementations");
const HasQuater_state_1 = require("./States/implementations/HasQuater.state");
const Sold_state_1 = require("./States/implementations/Sold.state");
const SoldOut_state_1 = require("./States/implementations/SoldOut.state");
const Winner_state_1 = require("./States/implementations/Winner.state");
class GumballMachine {
    constructor(count) {
        this.noQuater = new implementations_1.NoQuaterState(this);
        this.hasQuater = new HasQuater_state_1.HasQuaterState(this);
        this.sold = new Sold_state_1.SoldState(this);
        this.soldOut = new SoldOut_state_1.SOldOutState(this);
        this.winnerState = new Winner_state_1.WinnerState(this);
        this.currentState = this.soldOut;
        this.count = count;
        if (this.count) {
            this.currentState = this.noQuater;
        }
    }
    getHasQuaterState() {
        return this.hasQuater;
    }
    getNoQuaterState() {
        return this.noQuater;
    }
    getSoldState() {
        return this.sold;
    }
    getSoldOutState() {
        return this.soldOut;
    }
    getWinnerState() {
        return this.winnerState;
    }
    releaseBall() {
        console.log("Relasese the ball");
        if (this.count > 0) {
            this.count -= 1;
        }
    }
    getGumBallsCount() {
        return this.count;
    }
    setState(state) {
        this.currentState = state;
    }
    refill(count) {
        this.count = count;
        console.log("Machine refilled");
        this.currentState.refill();
    }
    insertCoin() {
        this.currentState.insertCoin();
    }
    ejectCoin() {
        this.currentState.ejectCoin();
    }
    turnCrank() {
        this.currentState.turnCrank();
        this.currentState.dispense();
    }
}
exports.GumballMachine = GumballMachine;
