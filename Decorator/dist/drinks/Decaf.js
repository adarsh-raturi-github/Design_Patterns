"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decaf = void 0;
const Beverage_1 = require("../Beverage");
class Decaf extends Beverage_1.Beverage {
    constructor() {
        super();
        this.description = "Decaf";
    }
    cost() {
        return 120;
    }
}
exports.Decaf = Decaf;
