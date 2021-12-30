/* eslint-disable react-hooks/exhaustive-deps */
import { HeaderTitle } from "../../atomic/atoms/HeaderTitle/HeaderTitle";
import { HomeContent } from "./templates/Content/HomeContent";
import { HomeHeader } from "./templates/Header/HomeHeader";
import { TabSelector } from "../../atomic/molecules/TabSelector/TabSelector";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import React, { useEffect } from "react";
import { IHomeTabs, tabs, Tabs } from "./definitions";

export function selectTabComponent(tabName: IHomeTabs) {
  const selectedTab: Tabs[] = tabs.filter((obj) => {
    return obj.tabName === tabName;
  });
  return selectedTab[0];
}

export const Home: React.FC = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useLocalStorageState<Tabs>(
    "selected-tab",
    tabs[0]
  );

  function handleTabSelection(newTab: Tabs) {
    setTabSelected(newTab);
  }

  const ActualTab = selectTabComponent(tabSelected.tabName).component;

  return (
    <div>
      <HomeHeader LeftElement={<HeaderTitle text="Hacker News" />} />
      <HomeContent
        Header={
          <TabSelector
            tabs={tabs}
            actualTab={tabSelected}
            tabSetter={handleTabSelection}
          />
        }
        CentralContent={<ActualTab />}
      />
    </div>
  );
};
