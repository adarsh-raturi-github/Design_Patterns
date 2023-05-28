"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeHouseMenu = void 0;
const menu_item_1 = require("./menu-item");
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class PancakeHouseMenu {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
        //inserting Menu items in pancake house menu
        const item1 = new menu_item_1.MenuItem('Dosa', 'A delicious south indian food', true, 20);
        const item2 = new menu_item_1.MenuItem('Filer Coffee', 'A coffee that make your day awww..', true, 15);
        const item3 = new menu_item_1.MenuItem('Egg burchii', 'egg scramble with indian herbs', false, 30);
        this.addItem(item1);
        this.addItem(item2);
        this.addItem(item3);
    }
    addItem(value) {
        const node = new Node(value);
        //insert at end
        if (!this.length) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
    }
    getItems() {
        return { head: this.head };
    }
}
exports.PancakeHouseMenu = PancakeHouseMenu;
