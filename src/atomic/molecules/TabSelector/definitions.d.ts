import { homeTabs } from "../../../views/Home/Home";

export interface ITabSelector {
  tabs: string[];
  actualTab: homeTabs;
  tabSetter: Function;
}
