import { GumballMachine } from "../../GumBallMachine";
import { State } from "../interfaces";

export class HasQuaterState implements State {
  gumBallMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
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
    const winner = this._getRandomNumber();
    if (winner === 1 && this.gumBallMachine.getGumBallsCount() > 2) {
      console.log("---horaah you`re lucky winner---");
      this.gumBallMachine.setState(this.gumBallMachine.getWinnerState());
    } else {
      this.gumBallMachine.setState(this.gumBallMachine.getSoldState());
      console.log("Please wait to get your gumball");
    }
  }

  dispense() {
    console.log("Please turn the crank");
  }

  private _getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  refill() {}
}
