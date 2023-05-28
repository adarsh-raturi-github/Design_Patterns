"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinerMenuIterator = void 0;
class DinerMenuIterator {
    constructor(menuItems) {
        this.menuItems = menuItems;
        this.position = 0;
    }
    hasNext() {
        if (this.position === this.menuItems.length) {
            return false;
        }
        return true;
    }
    next() {
        const item = this.menuItems[this.position];
        this.position += 1;
        return item;
    }
}
exports.DinerMenuIterator = DinerMenuIterator;
