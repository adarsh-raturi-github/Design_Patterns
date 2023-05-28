import { DinerHouseMenu } from "./src/Diner-House/diner-menu-items";
import { PancakeHouseMenu } from "./src/Pancake-House/pancake-house-menu";
import { SevenHillsMenu } from "./src/Seven-Hills/seven-hills-menu";
import { Waiter } from "./src/waiter";

class Main {
  waiter: Waiter;
  pancakeHouseMenu: PancakeHouseMenu;
  dinerHouseMenu: DinerHouseMenu;
  sevenHillsMenu: SevenHillsMenu;
  constructor() {
    this.pancakeHouseMenu = new PancakeHouseMenu();
    this.dinerHouseMenu = new DinerHouseMenu();
    this.sevenHillsMenu = new SevenHillsMenu();
    this.waiter = new Waiter(
      this.pancakeHouseMenu,
      this.dinerHouseMenu,
      this.sevenHillsMenu
    );
  }

  callWaiter() {
    console.log("Waiter: Coming in 2 second");
    setTimeout(() => {
      console.log("Waiter: Hi this is the menu");
      this.waiter.printMenu();
    }, 2000);
  }
}

const main = new Main();
console.log("You: Here please");
main.callWaiter();
