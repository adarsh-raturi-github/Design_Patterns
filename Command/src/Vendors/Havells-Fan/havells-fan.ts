export const enum FAN_SPEED {
  LOW,
  MEDIUM,
  HIGH,
  OFF,
}
export class HavellsFan {
  speed = FAN_SPEED.OFF;
  constructor(private readonly location: string) {}
  high() {
    this._isFanOn();
    this.speed = FAN_SPEED.HIGH;
    console.log(`${this.location} fan is set to high speed`);
  }
  medium() {
    this._isFanOn();
    this.speed = FAN_SPEED.MEDIUM;
    console.log(`${this.location} fan is set to medium speed`);
  }
  low() {
    this._isFanOn();
    this.speed = FAN_SPEED.LOW;
    console.log(`${this.location} fan is set to low speed`);
  }
  off() {
    this.speed = FAN_SPEED.OFF;
    console.log(`${this.location} fan is set to off`);
  }
  getSpeed() {
    return this.speed;
  }
  on() {
    console.log(`${this.location} fan is on..`);
  }
  private _isFanOn() {
    if (this.speed === FAN_SPEED.OFF) {
      this.on();
    }
  }
}
