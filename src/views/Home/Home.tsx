import { useThemeContext } from "./../../context/ThemeContext";
import React from "react";
import { HomeContent } from "./templates/Content/HomeContent";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { HomeHeader } from "./templates/Header/HomeHeader";
import { HeaderTitle } from "../../atomic/atoms/HeaderTitle/HeaderTitle";

export const Home: React.FC = (): JSX.Element => {
  const [selectedFilter, setSelecterFilter, removeSelectedFilter] =
    useLocalStorageState("selected-filter", "0");

  const [favoritePosts, setFavoritePosts, removeFavoritePosts] =
    useLocalStorageState("favorite-posts");

  const { decisions, choices } = useThemeContext();
  
  return (
    <div>
      <HomeHeader LeftElement={<HeaderTitle text="Hacker News" />} />
      <HomeContent Header={<div>Header</div>} />
    </div>
  );
};
