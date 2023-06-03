import { HitachiLight } from "../../Vendors/Hitachi-Lights/hitachi-light";
import { CommandInterface } from "../interfaces/command.interface";

export class LightOffCommand implements CommandInterface {
  light: HitachiLight;
  constructor(light: HitachiLight) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }
  undo(): void {
    {
      this.light.on();
    }
  }
}
