"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeMenuIterator = void 0;
class PancakeMenuIterator {
    constructor(node) {
        this.currentPos = node;
    }
    hasNext() {
        if (this.currentPos) {
            return true;
        }
        return false;
    }
    next() {
        {
            const item = this.currentPos.value;
            this.currentPos = this.currentPos.next;
            return item;
        }
    }
}
exports.PancakeMenuIterator = PancakeMenuIterator;
