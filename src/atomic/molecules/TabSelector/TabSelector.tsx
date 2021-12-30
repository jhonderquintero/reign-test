import { TabButton } from "../../atoms/TabButton/TabButton";
import React, { MouseEvent, MouseEventHandler, SyntheticEvent } from "react";
import { ITabSelector } from "./definitions";
import "./styles.css";
import { IHomeTabs, Tabs } from "../../../views/Home/definitions";
import { selectTabComponent } from "../../../views/Home/Home";

export const TabSelector: React.FC<ITabSelector> = ({
  tabs,
  actualTab,
  tabSetter,
}): JSX.Element => {
  const handleTabSelection = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button = e.target as HTMLButtonElement;
    const buttonText = button.innerText as IHomeTabs;
    tabSetter(selectTabComponent(buttonText));
  };

  return (
    <div className="tab-selector">
      <form>
        {tabs.map((tab: Tabs) => {
          const isTabSelected: boolean = tab.tabName === actualTab.tabName;
          return (
            <TabButton
              key={tab.tabName}
              selected={isTabSelected}
              onClick={handleTabSelection}
            >
              {tab.tabName}
            </TabButton>
          );
        })}
      </form>
    </div>
  );
};
