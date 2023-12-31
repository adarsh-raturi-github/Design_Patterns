"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expresso = void 0;
const Beverage_1 = require("../Beverage");
class Expresso extends Beverage_1.Beverage {
    constructor() {
        super();
        this.description = "Expresso";
    }
    cost() {
        return 100;
    }
}
exports.Expresso = Expresso;
