"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlasticDuck = void 0;
const No_Fly_1 = require("../Behaviour/FlyBehaviour/No_Fly");
const MuteQuack_1 = require("../Behaviour/QuackBehaviour/MuteQuack");
const Duck_1 = require("../Duck");
class PlasticDuck extends Duck_1.Duck {
    constructor() {
        super();
        this.flyBehaviour = new No_Fly_1.NoFly();
        this.quackBehaviour = new MuteQuack_1.MuteQuack();
    }
    display() {
        console.log("I am Plastic Duck");
    }
}
exports.PlasticDuck = PlasticDuck;
