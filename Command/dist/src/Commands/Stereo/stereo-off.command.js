"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StereoOffCommand = void 0;
class StereoOffCommand {
    constructor(stereo) {
        this.stereo = stereo;
        // you can also create Stereo interface and all vendors should implement this interface thus will able to support multiple vendors
    }
    execute() {
        this.stereo.off();
    }
    undo() {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolumne(11);
    }
}
exports.StereoOffCommand = StereoOffCommand;
