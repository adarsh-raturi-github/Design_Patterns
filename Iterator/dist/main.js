"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diner_menu_items_1 = require("./src/Diner-House/diner-menu-items");
const pancake_house_menu_1 = require("./src/Pancake-House/pancake-house-menu");
const seven_hills_menu_1 = require("./src/Seven-Hills/seven-hills-menu");
const waiter_1 = require("./src/waiter");
class Main {
    constructor() {
        this.pancakeHouseMenu = new pancake_house_menu_1.PancakeHouseMenu();
        this.dinerHouseMenu = new diner_menu_items_1.DinerHouseMenu();
        this.sevenHillsMenu = new seven_hills_menu_1.SevenHillsMenu();
        this.waiter = new waiter_1.Waiter(this.pancakeHouseMenu, this.dinerHouseMenu, this.sevenHillsMenu);
    }
    callWaiter() {
        console.log("Waiter: Coming in 2 second");
        setTimeout(() => {
            console.log("Waiter: Hi this is the menu");
            this.waiter.printMenu();
        }, 2000);
    }
}
const main = new Main();
console.log("You: Here please");
main.callWaiter();
