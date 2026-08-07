import { IDuck } from "../../interfaces";

export class MallardDuck implements IDuck {
  quack(): void {
    console.log("Mallard Duck Quack");
  }

  fly(): void {
    console.log("Mallard Duck fly");
  }
}
