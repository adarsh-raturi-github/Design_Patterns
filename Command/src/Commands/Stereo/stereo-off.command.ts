import { HarmanStereo } from "../../Vendors/Harman-Stereo/harman-stereo";
import { CommandInterface } from "../interfaces/command.interface";

export class StereoOffCommand implements CommandInterface {
  constructor(private readonly stereo: HarmanStereo) {
    // you can also create Stereo interface and all vendors should implement this interface thus will able to support multiple vendors
  }

  execute(): void {
    this.stereo.off();
  }
  undo(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolumne(11);
  }
}
