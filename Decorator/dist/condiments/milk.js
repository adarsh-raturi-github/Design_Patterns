"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Milk = void 0;
const Condiment_decorator_1 = require("../Condiment-decorator");
class Milk extends Condiment_decorator_1.CondimentDecorator {
    constructor(b) {
        super();
        this.beverage = b;
    }
    getDescription() {
        return this.beverage.getDescription() + " Milk";
    }
    cost() {
        return this.beverage.cost() + 25;
    }
}
exports.Milk = Milk;
