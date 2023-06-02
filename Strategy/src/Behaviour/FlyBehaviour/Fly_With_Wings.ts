import { FlyBehaviour } from "./interfaces/FlyBehaviour";

export class FlyWithWings implements FlyBehaviour {
  fly(): void {
    {
      console.log("Flying with wings");
    }
  }
}
