import { NoQuaterState } from "./States/implementations";
import { HasQuaterState } from "./States/implementations/HasQuater.state";
import { SoldState } from "./States/implementations/Sold.state";
import { SOldOutState } from "./States/implementations/SoldOut.state";
import { WinnerState } from "./States/implementations/Winner.state";
import { State } from "./States/interfaces";

export class GumballMachine {
  noQuater: State;
  soldOut: State;
  sold: State;
  hasQuater: State;
  winnerState: State;

  currentState: State;
  count: number;

  constructor(count: number) {
    this.noQuater = new NoQuaterState(this);
    this.hasQuater = new HasQuaterState(this);
    this.sold = new SoldState(this);
    this.soldOut = new SOldOutState(this);
    this.winnerState = new WinnerState(this);

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

  setState(state: State) {
    this.currentState = state;
  }

  refill(count: number) {
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
