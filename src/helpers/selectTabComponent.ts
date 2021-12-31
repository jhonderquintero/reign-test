import { IHomeTabs, tabs, Tabs } from "./../views/Home/definitions";

/**
 * Return an object with selected tab state (React Component [component] and tab title [tabTitle])
 * @param tabName 
 * @returns object: {component, tabName}
 */
export function selectTabComponent(tabName: IHomeTabs) {
  const selectedTab: Tabs[] = tabs.filter((obj) => {
    return obj.tabName === tabName;
  });
  return selectedTab[0];
}
