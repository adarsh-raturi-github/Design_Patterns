"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinerHouseMenu = void 0;
const diner_menu_iterator_1 = require("./diner-menu-iterator");
const menu_item_1 = require("../menu-item");
class DinerHouseMenu {
    constructor() {
        //max size 5 menu items
        this.menuItems = new Array(3);
        this.menuItems = [];
        const item1 = new menu_item_1.MenuItem("Chicken Briyani", "A beautiful chicken indian dish", false, 200);
        const item2 = new menu_item_1.MenuItem("Rissotto", "Kichdi that think itself as pasta", true, 1000);
        const item3 = new menu_item_1.MenuItem("Veg briyani", "Just a illusion it is just a pulao", true, 300);
        this.addItem(item1);
        this.addItem(item2);
        this.addItem(item3);
    }
    addItem(val) {
        this.menuItems.push(val);
    }
    createIterator() {
        return new diner_menu_iterator_1.DinerMenuIterator(this.menuItems);
    }
}
exports.DinerHouseMenu = DinerHouseMenu;
