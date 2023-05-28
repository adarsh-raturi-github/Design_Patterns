"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SevenHillsMenu = void 0;
const menu_item_1 = require("../menu-item");
const seven_menu_iterator_1 = require("./seven-menu-iterator");
class SevenHillsMenu {
    constructor() {
        this.menuItems = new Map();
        const item1 = new menu_item_1.MenuItem("Veg platter", "Plate with 9 veg dishes from various corner of world", true, 500);
        const item2 = new menu_item_1.MenuItem("Devils Momos", "Momos from hell...", false, 150);
        const item3 = new menu_item_1.MenuItem("Nothing", "Dish with all leftover from other dishes", false, 3000);
        this.addItem(item1);
        this.addItem(item2);
        this.addItem(item3);
    }
    addItem(menuItem) {
        this.menuItems.set(menuItem.getDescription(), menuItem);
    }
    createIterator() {
        return new seven_menu_iterator_1.SevenHillsMenuIterator([...this.menuItems.values()]);
    }
}
exports.SevenHillsMenu = SevenHillsMenu;
