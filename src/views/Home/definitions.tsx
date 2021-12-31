import { HomeAllCards } from "../../atomic/organisms/HomeAllCards/HomeAllCards";
import { HomeFavoritesCards } from "../../atomic/organisms/HomeFavoritesCards/HomeFavoritesCards";

export type IHomeTabs = "All" | "My faves";
export const homeTabs: IHomeTabs[] = ["All", "My faves"];

export interface Tabs {
  component: React.FC<any>;
  tabName: IHomeTabs;
}

export const tabs: Tabs[] = [
  {
    component: HomeAllCards,
    tabName: homeTabs[0],
  },
  {
    component: HomeFavoritesCards,
    tabName: homeTabs[1],
  },
];
