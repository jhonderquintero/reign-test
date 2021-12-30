import { TabButton } from "../../atoms/TabButton/TabButton";
import React, { MouseEvent, MouseEventHandler, SyntheticEvent } from "react";
import { ITabSelector } from "./definitions";
import "./styles.css";
import { homeTabs } from "views/Home/Home";

export const TabSelector: React.FC<ITabSelector> = ({
  tabs,
  actualTab,
  tabSetter,
}): JSX.Element => {
  const handleSelection = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button = e.target as HTMLButtonElement;
    tabSetter(button.innerHTML);
  };

  return (
    <div className="tab-selector">
      <form>
        {tabs.map((tabName: homeTabs | string) => {
          const isTabSelected: boolean = tabName === actualTab;
          return (
            <TabButton
              key={tabName}
              selected={isTabSelected}
              onClick={handleSelection}
            >
              {tabName}
            </TabButton>
          );
        })}
      </form>
    </div>
  );
};
