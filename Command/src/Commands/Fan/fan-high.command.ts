import { FAN_SPEED, HavellsFan } from "../../Vendors/Havells-Fan/havells-fan";
import { CommandInterface } from "../interfaces/command.interface";

export class FanHighCommand implements CommandInterface {
  prevspeed: number;
  constructor(private readonly fan: HavellsFan) {}
  execute(): void {
    this.prevspeed = this.fan.getSpeed();
    this.fan.high();
  }
  undo(): void {
    if (this.prevspeed === FAN_SPEED.HIGH) {
      this.fan.high();
    } else if (this.prevspeed === FAN_SPEED.LOW) {
      this.fan.low();
    } else if (this.prevspeed === FAN_SPEED.MEDIUM) {
      this.fan.medium();
    } else {
      this.fan.off();
    }
  }
}
