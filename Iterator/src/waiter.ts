// pancake house will serve breakfast
//diner menu will serve lunch
//seven hills will serve dinner

import { DinerHouseMenu } from "./Diner-House/diner-menu-items";
import { PancakeHouseMenu } from "./Pancake-House/pancake-house-menu";
import { SevenHillsMenu } from "./Seven-Hills/seven-hills-menu";
import { Iterator } from "./interfaces/iterator";
import { MenuItem } from "./menu-item";

export class Waiter {
  pancakeHouseMenu: PancakeHouseMenu;
  dinerHouseMenu: DinerHouseMenu;
  sevenHillsMenu: SevenHillsMenu;

  constructor(
    pancakeHouseMenu: PancakeHouseMenu,
    dinerHouseMenu: DinerHouseMenu,
    sevenHillsMenu: SevenHillsMenu
  ) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerHouseMenu = dinerHouseMenu;
    this.sevenHillsMenu = sevenHillsMenu;
  }
  printMenu() {
    const breafastItemIterator: Iterator =
      this.pancakeHouseMenu.createIterator();
    const lunchItemIterator: Iterator = this.dinerHouseMenu.createIterator();
    const dinnerItemIterator: Iterator = this.sevenHillsMenu.createIterator();
    console.log("-----------BREAKFAST MENU-----------------");
    this._printMenu(breafastItemIterator);
    console.log("-----------LUNCH MENU---------------------");
    this._printMenu(lunchItemIterator);
    console.log("-----------DINNER MENU--------------------");
    this._printMenu(dinnerItemIterator);
  }

  private _printMenu(iterator: Iterator) {
    let menuItem: MenuItem;
    while (iterator.hasNext()) {
      menuItem = iterator.next();
      console.log(menuItem.getName());
      console.log(menuItem.getDescription());
      console.log(`Vegetarian dish -- ${menuItem.isVegetarian()}`);
      console.log(`Price: ${menuItem.getPrice()}`);
      console.log("--------------------");
    }
  }
}
