"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedHeadDuck = void 0;
const Fly_With_Wings_1 = require("../Behaviour/FlyBehaviour/Fly_With_Wings");
const SqueakQuack_1 = require("../Behaviour/QuackBehaviour/SqueakQuack");
const Duck_1 = require("../Duck");
class RedHeadDuck extends Duck_1.Duck {
    constructor() {
        super();
        this.flyBehaviour = new Fly_With_Wings_1.FlyWithWings();
        this.quackBehaviour = new SqueakQuack_1.SqueakQuack();
    }
    display() {
        // just for fun ,plz dont be offended
        console.log("I am RedHead Duck , i am TOP G");
    }
}
exports.RedHeadDuck = RedHeadDuck;
