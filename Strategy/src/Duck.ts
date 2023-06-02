import { FlyBehaviour, QuackBehaviour } from "./Behaviour";

export abstract class Duck {
  protected flyBehaviour!: FlyBehaviour;
  protected quackBehaviour!: QuackBehaviour;

  public setFlyingBehaviuor(value: FlyBehaviour) {
    this.flyBehaviour = value;
  }
  public setQuackBehaviour(value: QuackBehaviour) {
    this.quackBehaviour = value;
  }
  public performFly() {
    this.flyBehaviour.fly();
  }

  public performQuack() {
    this.quackBehaviour.quack();
  }
  public abstract display(): void;
}
