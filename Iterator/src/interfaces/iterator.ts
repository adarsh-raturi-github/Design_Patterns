import { MenuItem } from "../menu-item";

export interface Iterator
{
    hasNext():boolean;
    next():MenuItem;
}