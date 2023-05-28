import { Menu } from "../interfaces/menu";
import { MenuItem } from "../menu-item";
import { NodeInterface } from "./interfaces/node-interface";
import { PancakeMenuIterator } from "./pancake-menu-iterator";

class Node implements NodeInterface {
  value: MenuItem;
  next: Node | null;
  constructor(val: MenuItem) {
    this.value = val;
    this.next = null;
  }
}

export class PancakeHouseMenu implements Menu {
  head: NodeInterface | null;
  tail: NodeInterface | null;
  currentPos: Node | null;
  constructor() {
    this.currentPos = this.head = this.tail = null;

    //inserting Menu items in pancake house menu
    const item1 = new MenuItem(
      "Dosa",
      "A delicious south indian food",
      true,
      20
    );
    const item2 = new MenuItem(
      "Filer Coffee",
      "A coffee that make your day awww..",
      true,
      15
    );
    const item3 = new MenuItem(
      "Egg burchii",
      "egg scramble with indian herbs",
      false,
      30
    );
    this.addItem(item1);
    this.addItem(item2);
    this.addItem(item3);
  }

  addItem(value: MenuItem) {
    const node = new Node(value);
    //insert at end
    if (!this.head) {
      this.head = this.tail = node;
      this.currentPos = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
  }

  createIterator() {
    return new PancakeMenuIterator(this.head!);
  }
}
