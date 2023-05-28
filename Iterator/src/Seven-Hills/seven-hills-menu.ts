import { Iterator } from "../interfaces/iterator";
import { Menu } from "../interfaces/menu";
import { MenuItem } from "../menu-item";
import { SevenHillsMenuIterator } from "./seven-menu-iterator";

export class SevenHillsMenu implements Menu {
  menuItems: Map<string, MenuItem>;
  constructor() {
    this.menuItems = new Map();
    const item1 = new MenuItem(
      "Veg platter",
      "Plate with 9 veg dishes from various corner of world",
      true,
      500
    );
    const item2 = new MenuItem(
      "Devils Momos",
      "Momos from hell...",
      false,
      150
    );
    const item3 = new MenuItem(
      "Nothing",
      "Dish with all leftover from other dishes",
      false,
      3000
    );

    this.addItem(item1);
    this.addItem(item2);
    this.addItem(item3);
  }

  addItem(menuItem: MenuItem) {
    this.menuItems.set(menuItem.getDescription(), menuItem);
  }

  createIterator(): Iterator {
    return new SevenHillsMenuIterator([...this.menuItems.values()]);
  }
}
