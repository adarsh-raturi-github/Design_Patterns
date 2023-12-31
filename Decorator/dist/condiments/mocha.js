"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mocha = void 0;
const Condiment_decorator_1 = require("../Condiment-decorator");
class Mocha extends Condiment_decorator_1.CondimentDecorator {
    constructor(b) {
        super();
        this.beverage = b;
    }
    getDescription() {
        return this.beverage.getDescription() + " Mocha";
    }
    cost() {
        return this.beverage.cost() + 30;
    }
}
exports.Mocha = Mocha;
