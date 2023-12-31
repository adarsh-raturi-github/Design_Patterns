import { Beverage } from "../Beverage";

export class Expresso extends Beverage {
  constructor() {
    super();
    this.description = "Expresso";
  }
  cost() {
    return 100;
  }
}
