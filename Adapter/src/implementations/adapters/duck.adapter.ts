import { IDuck, ITurkey } from "../../interfaces";

export class DuckAdapter implements ITurkey {
  private duck: IDuck;

  constructor(duck: IDuck) {
    this.duck = duck;
  }
  fly() {
    this.duck.fly();
  }

  gobble() {
    this.duck.quack();
  }
}
