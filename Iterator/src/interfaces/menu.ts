import { MenuItem } from "../menu-item";
import { Iterator } from "./iterator";

export interface Menu {
  createIterator(): Iterator;
}
