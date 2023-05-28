import { DinerMenuIterator } from "./diner-menu-iterator";
import { MenuItem } from "../menu-item";
import { Menu } from "../interfaces/menu";

export class DinerHouseMenu implements Menu {
  //max size 5 menu items
  menuItems = new Array<MenuItem>(3);

  constructor() {
    this.menuItems = [];
    const item1 = new MenuItem(
      "Chicken Briyani",
      "A beautiful chicken indian dish",
      false,
      200
    );
    const item2 = new MenuItem(
      "Rissotto",
      "Kichdi that think itself as pasta",
      true,
      1000
    );
    const item3 = new MenuItem(
      "Veg briyani",
      "Just a illusion it is just a pulao",
      true,
      300
    );
    this.addItem(item1);
    this.addItem(item2);
    this.addItem(item3);
  }

  addItem(val: MenuItem) {
    this.menuItems.push(val);
  }

  createIterator() {
    return new DinerMenuIterator(this.menuItems);
  }
}
