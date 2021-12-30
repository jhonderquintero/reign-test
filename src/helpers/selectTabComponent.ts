import { IHomeTabs, tabs, Tabs } from "./../views/Home/definitions";

export function selectTabComponent(tabName: IHomeTabs) {
  const selectedTab: Tabs[] = tabs.filter((obj) => {
    return obj.tabName === tabName;
  });
  return selectedTab[0];
}
