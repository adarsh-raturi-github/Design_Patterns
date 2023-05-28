"use strict";
// pancake house will serve breakfast
//diner menu will serve lunch
//seven hills will serve dinner
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
class Waiter {
    constructor(pancakeHouseMenu, dinerHouseMenu, sevenHillsMenu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerHouseMenu = dinerHouseMenu;
        this.sevenHillsMenu = sevenHillsMenu;
    }
    printMenu() {
        const breafastItemIterator = this.pancakeHouseMenu.createIterator();
        const lunchItemIterator = this.dinerHouseMenu.createIterator();
        const dinnerItemIterator = this.sevenHillsMenu.createIterator();
        console.log("-----------BREAKFAST MENU-----------------");
        this._printMenu(breafastItemIterator);
        console.log("-----------LUNCH MENU---------------------");
        this._printMenu(lunchItemIterator);
        console.log("-----------DINNER MENU--------------------");
        this._printMenu(dinnerItemIterator);
    }
    _printMenu(iterator) {
        let menuItem;
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
exports.Waiter = Waiter;
