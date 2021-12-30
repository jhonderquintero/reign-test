export type IHomeTabs = "All" | "My faves";
export const homeTabs: IHomeTabs[] = ["All", "My faves"];

export interface Tabs {
  component: React.FC<any>;
  tabName: IHomeTabs;
}

export const HomeAllTab = () => <div>All Tab</div>;
export const HomeFavoritesTab = () => <div>Favorites Tab</div>;

export const tabs: Tabs[] = [
  {
    component: HomeAllTab,
    tabName: homeTabs[0],
  },
  {
    component: HomeFavoritesTab,
    tabName: homeTabs[1],
  },
];
