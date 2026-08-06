import { GumballMachine } from "./GumBallMachine";
import { RemoteProxyInterface } from "./remote-proxy.interface";
import axios from "axios";

export class GumBallMachineMonitor {
  gumballMachine: RemoteProxyInterface;

  constructor(gumballMachine: RemoteProxyInterface) {
    this.gumballMachine = gumballMachine;
  }

  async getReport() {
    try {
      const { data } = await axios.get("http://localhost:3000/report");
      console.log("--- Generating  Report ---");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
}

const gumballMachine1: RemoteProxyInterface = new GumballMachine(
  "Dehradun",
  10
);
const obj = new GumBallMachineMonitor(gumballMachine1);
obj.getReport()