"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
class MenuItem {
    constructor(name, description, vegetarian, price) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    isVegetarian() {
        return this.vegetarian;
    }
    getPrice() {
        return this.price;
    }
}
exports.MenuItem = MenuItem;
