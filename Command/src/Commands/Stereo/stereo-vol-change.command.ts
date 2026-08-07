import { HarmanStereo } from "../../Vendors/Harman-Stereo/harman-stereo";
import { CommandInterface } from "../interfaces/command.interface";

export class StereoVolChangeCommand implements CommandInterface {
  constructor(
    private readonly stereo: HarmanStereo,
    private readonly level: number,
  ) {
    // you can also create Stereo interface and all vendors should implement this interface thus will able to support multiple vendors
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolumne(this.level);
  }
  undo(): void {
    this.stereo.off();
  }
}
