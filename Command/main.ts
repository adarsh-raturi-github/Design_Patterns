import { FanHighCommand } from "./src/Commands/Fan/fan-high.command";
import { FanOffCommand } from "./src/Commands/Fan/fan-off.command";
import { LightOffCommand, LightOnCommand } from "./src/Commands/Lights";
import { MacroCommand } from "./src/Commands/Macro";
import { StereoOnCommand, StereoOffCommand } from "./src/Commands/Stereo";
import { RemoteControl } from "./src/RemoteControl";
import { HarmanStereo } from "./src/Vendors/Harman-Stereo/harman-stereo";
import { HavellsFan } from "./src/Vendors/Havells-Fan/havells-fan";
import { HitachiLight } from "./src/Vendors/Hitachi-Lights/hitachi-light";

class Main {
  remoteControl: RemoteControl;
  constructor() {
    this.remoteControl = new RemoteControl();
  }
  setSlots() {
    console.log("Slots are from number (1-4)");
    //can put any command to any slots
    //---------------Available devices-----------------------
    const kitchenLight = new HitachiLight("Kitchen");
    const gardenLight = new HitachiLight("Garden");
    const stereo = new HarmanStereo();
    const fan = new HavellsFan("Drawing Room");
    //--------------------------------------------------------
    this._assignSlotsToDevices(kitchenLight, gardenLight, stereo, fan);
    // kitchen light will be on
    this.remoteControl.onButtonPress(1);
    //kitechen light will be off
    this.remoteControl.offButtonPress(1);
    //garden light will be on
    this.remoteControl.onButtonPress(2);
    //undo thus garden light will be off
    this.remoteControl.undoButtonPressed();
    //stero will be on
    this.remoteControl.onButtonPress(3);
    //fan will be on and put  on high speed
    this.remoteControl.onButtonPress(4);
    // fan will be off becoz undo pressed
    this.remoteControl.undoButtonPressed();
    console.log("-----------Party Mode --------------------");
    //change to slot 4 commands
    this.remoteControl.setCommand(
      4,
      new MacroCommand([
        new LightOnCommand(gardenLight),
        new StereoOnCommand(stereo),
      ]),
      new FanOffCommand(fan)
    );
    //party mode started
    this.remoteControl.onButtonPress(4);
    console.log("----------------Party Mode off-------------");
    this.remoteControl.undoButtonPressed();
  }

  private _assignSlotsToDevices(
    kitchenLight: HitachiLight,
    gardenLight: HitachiLight,
    stereo: HarmanStereo,
    fan: HavellsFan
  ) {
    /*
    slot-1 Kitchen light
    slot-2 garden light
    slot-3 Stereo
    slot-4 Fan
    */
    this.remoteControl.setCommand(
      1,
      new LightOnCommand(kitchenLight),
      new LightOffCommand(kitchenLight)
    );
    this.remoteControl.setCommand(
      2,
      new LightOnCommand(gardenLight),
      new LightOffCommand(gardenLight)
    );
    this.remoteControl.setCommand(
      3,
      new StereoOnCommand(stereo),
      new StereoOffCommand(stereo)
    );
    this.remoteControl.setCommand(
      4,
      new FanHighCommand(fan),
      new FanOffCommand(fan)
    );
  }
}
const main = new Main();
main.setSlots();
