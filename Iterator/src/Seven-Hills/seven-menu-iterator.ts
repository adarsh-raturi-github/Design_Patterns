import { Iterator } from "../interfaces/iterator";
import { MenuItem } from "../menu-item";

export class SevenHillsMenuIterator implements Iterator {
  menuItems: MenuItem[];
  position: number;
  constructor(menuItems: MenuItem[]) {
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
