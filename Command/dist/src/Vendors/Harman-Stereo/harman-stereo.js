"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarmanStereo = void 0;
class HarmanStereo {
    on() {
        console.log("Harman stereo is On");
    }
    off() {
        console.log("Harman stereo is Off");
    }
    setCd() {
        console.log("Cd  is inserted");
    }
    setDvd() {
        console.log("Dvd  is inserted");
    }
    setRadio() {
        console.log("Radio is on ");
    }
    setVolumne(level) {
        console.log(`Set the volume level to ${level}`);
    }
}
exports.HarmanStereo = HarmanStereo;
