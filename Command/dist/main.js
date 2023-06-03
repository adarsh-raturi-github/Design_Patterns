"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fan_high_command_1 = require("./src/Commands/Fan/fan-high.command");
const fan_off_command_1 = require("./src/Commands/Fan/fan-off.command");
const Lights_1 = require("./src/Commands/Lights");
const Macro_1 = require("./src/Commands/Macro");
const Stereo_1 = require("./src/Commands/Stereo");
const RemoteControl_1 = require("./src/RemoteControl");
const harman_stereo_1 = require("./src/Vendors/Harman-Stereo/harman-stereo");
const havells_fan_1 = require("./src/Vendors/Havells-Fan/havells-fan");
const hitachi_light_1 = require("./src/Vendors/Hitachi-Lights/hitachi-light");
class Main {
    constructor() {
        this.remoteControl = new RemoteControl_1.RemoteControl();
    }
    setSlots() {
        console.log("Slots are from number (1-4)");
        //can put any command to any slots
        //---------------Available devices-----------------------
        const kitchenLight = new hitachi_light_1.HitachiLight("Kitchen");
        const gardenLight = new hitachi_light_1.HitachiLight("Garden");
        const stereo = new harman_stereo_1.HarmanStereo();
        const fan = new havells_fan_1.HavellsFan("Drawing Room");
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
        this.remoteControl.setCommand(4, new Macro_1.MacroCommand([
            new Lights_1.LightOnCommand(gardenLight),
            new Stereo_1.StereoOnCommand(stereo),
        ]), new fan_off_command_1.FanOffCommand(fan));
        //party mode started
        this.remoteControl.onButtonPress(4);
        console.log("----------------Party Mode off-------------");
        this.remoteControl.undoButtonPressed();
    }
    _assignSlotsToDevices(kitchenLight, gardenLight, stereo, fan) {
        /*
        slot-1 Kitchen light
        slot-2 garden light
        slot-3 Stereo
        slot-4 Fan
        */
        this.remoteControl.setCommand(1, new Lights_1.LightOnCommand(kitchenLight), new Lights_1.LightOffCommand(kitchenLight));
        this.remoteControl.setCommand(2, new Lights_1.LightOnCommand(gardenLight), new Lights_1.LightOffCommand(gardenLight));
        this.remoteControl.setCommand(3, new Stereo_1.StereoOnCommand(stereo), new Stereo_1.StereoOffCommand(stereo));
        this.remoteControl.setCommand(4, new fan_high_command_1.FanHighCommand(fan), new fan_off_command_1.FanOffCommand(fan));
    }
}
const main = new Main();
main.setSlots();
