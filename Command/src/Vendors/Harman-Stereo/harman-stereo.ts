export class HarmanStereo {
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
  setVolumne(level: number) {
    console.log(`Set the volume level to ${level}`);
  }
}
