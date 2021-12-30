import { Tabs } from "../../../views/Home/definitions";

export interface ITabSelector {
  tabs: Tabs[];
  actualTab: Tabs;
  tabSetter: Function;
}
