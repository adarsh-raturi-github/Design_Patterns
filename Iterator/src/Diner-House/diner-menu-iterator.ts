import { Iterator } from "../interfaces/iterator";
import { MenuItem } from "../menu-item";

export class DinerMenuIterator implements Iterator {
  menuItems: MenuItem[];
  position: number;
  constructor(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
    this.position = 0;
  }
  hasNext(): boolean {
    if (this.position === this.menuItems.length) {
      return false;
    }
    return true;
  }

  next(): MenuItem {
    const item = this.menuItems[this.position];
    this.position += 1;
    return item;
  }
}
