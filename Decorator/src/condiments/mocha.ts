import { Beverage } from "../Beverage";
import { CondimentDecorator } from "../Condiment-decorator";

export class Mocha extends CondimentDecorator {
  beverage: Beverage;
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }
  getDescription() {
    return this.beverage.getDescription() + " Mocha";
  }
  cost(): number {
    return this.beverage.cost() + 30;
  }
}
