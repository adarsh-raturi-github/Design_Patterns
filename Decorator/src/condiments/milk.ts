import { Beverage } from "../Beverage";
import { CondimentDecorator } from "../Condiment-decorator";

export class Milk extends CondimentDecorator {
  beverage: Beverage;
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }
  getDescription() {
    return this.beverage.getDescription() + " Milk";
  }
  cost(): number {
    return this.beverage.cost() + 25;
  }
}
