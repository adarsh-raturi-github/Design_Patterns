import { Iterator } from "../interfaces/iterator";
import { MenuItem } from "../menu-item";
import { NodeInterface } from "./interfaces/node-interface";

export class PancakeMenuIterator implements Iterator {
  currentPos: NodeInterface;
  constructor(node: NodeInterface) {
    this.currentPos = node;
  }
  hasNext() {
    if (this.currentPos) {
      return true;
    }
    return false;
  }

  next(): MenuItem {
    {
      const item = this.currentPos.value;
      this.currentPos = this.currentPos.next!;
      return item;
    }
  }
}
