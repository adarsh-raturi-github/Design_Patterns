"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MallardDuck = void 0;
const Fly_With_Wings_1 = require("../Behaviour/FlyBehaviour/Fly_With_Wings");
const LoudQuack_1 = require("../Behaviour/QuackBehaviour/LoudQuack");
const Duck_1 = require("../Duck");
class MallardDuck extends Duck_1.Duck {
    constructor() {
        super();
        this.flyBehaviour = new Fly_With_Wings_1.FlyWithWings();
        this.quackBehaviour = new LoudQuack_1.LoudQuack();
    }
    display() {
        console.log("Hi....... I am mallard duck");
    }
}
exports.MallardDuck = MallardDuck;
