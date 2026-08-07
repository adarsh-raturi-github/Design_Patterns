import { IDuck, ITurkey } from "../../interfaces";

export class TurkeyAdapter implements IDuck {
  private turkey: ITurkey;

  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }
  fly() {
    this.turkey.fly();
  }

  quack() {
    this.turkey.gobble();
  }
}
