import { MenuItem } from "../../menu-item";

export interface NodeInterface {
  value: MenuItem;
  next: NodeInterface | null;
}
