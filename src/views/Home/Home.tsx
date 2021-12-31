import { HeaderTitle } from "../../atomic/atoms/HeaderTitle/HeaderTitle";
import { HomeContent } from "./templates/Content/HomeContent";
import { HomeHeader } from "./templates/Header/HomeHeader";
import { TabSelector } from "../../atomic/molecules/TabSelector/TabSelector";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import React from "react";
import { tabs, Tabs } from "./definitions";
import { selectTabComponent } from "../../helpers/selectTabComponent";

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
