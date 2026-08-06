import express, { Request, Response } from "express";
import { GumballMachine } from "./src/GumBallMachine";

const app = express();

app.get("/report", (req: Request, res: Response) => {
  res.send(gumballMachine1.report());
});

function dummyActions() {
  gumballMachine1.insertCoin();
  gumballMachine1.turnCrank();
  console.log("---------------------------");
  gumballMachine1.insertCoin();
  gumballMachine1.turnCrank();

  console.log("---------------------------");
  // with no coin eject and turn the crank
  gumballMachine1.ejectCoin();
  gumballMachine1.turnCrank();

  console.log("---------------------------");
  // first inserting coin and than eject and than turn crank twice
  gumballMachine1.insertCoin();
  gumballMachine1.ejectCoin();
  gumballMachine1.turnCrank();
  gumballMachine1.turnCrank();

  console.log("----------------------------");
  // turning the crank with no coin
  gumballMachine1.turnCrank();
}

app.listen(3000, () => {
  dummyActions();
  console.log("Listen on port 3000");
});
