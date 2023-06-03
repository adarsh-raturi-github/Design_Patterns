import { HitachiLight } from "../../Vendors/Hitachi-Lights/hitachi-light";
import { CommandInterface } from "../interfaces/command.interface";

export class LightOnCommand implements CommandInterface {
  light: HitachiLight;
  constructor(light: HitachiLight) {
    this.light = light;
  }
  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
