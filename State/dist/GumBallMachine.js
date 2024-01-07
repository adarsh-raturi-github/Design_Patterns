"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GumballMachine = void 0;
const implementations_1 = require("./States/implementations");
class GumballMachine {
    constructor(count) {
        this.noQuater = new implementations_1.NoQuaterState(this);
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
    releaseBall() {
        console.log("Relases the ball");
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
    }
}
exports.GumballMachine = GumballMachine;
