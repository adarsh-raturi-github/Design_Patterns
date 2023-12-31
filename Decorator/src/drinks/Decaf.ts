import { Beverage } from "../Beverage";

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf";
  }
  cost() {
    return 120;
  }
}
