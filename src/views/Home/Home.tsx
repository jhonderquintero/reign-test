import { useThemeContext } from "./../../context/ThemeContext";
import React, { useState } from "react";
import { HomeContent } from "./templates/Content/HomeContent";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { HomeHeader } from "./templates/Header/HomeHeader";
import { HeaderTitle } from "../../atomic/atoms/HeaderTitle/HeaderTitle";
import { TabSelector } from "../../atomic/molecules/TabSelector/TabSelector";

export type homeTabs = "All" | "My faves";

export const Home: React.FC = (): JSX.Element => {
  const tabs: homeTabs[] = ["All", "My faves"];
  const [tabSelected, setTabSelected] = useState<homeTabs>(tabs[0]);

  const [selectedFilter, setSelecterFilter, removeSelectedFilter] =
    useLocalStorageState("selected-filter", "0");

  const [favoritePosts, setFavoritePosts, removeFavoritePosts] =
    useLocalStorageState("favorite-posts");

  const { decisions, choices } = useThemeContext();

  function handleTabSelection(newTab: homeTabs) {
    setTabSelected(newTab);
  }

  return (
    <div>
      <HomeHeader LeftElement={<HeaderTitle text="Hacker News" />} />
      <HomeContent
        Header={<TabSelector tabs={tabs} actualTab={tabSelected} tabSetter={handleTabSelection}/>}
        CentralContent={<div>Central Content</div>}
      />
    </div>
  );
};
