import "./styles.css";
import { DropdownMenu } from "../../../atomic/molecules/DropdownMenu/DropdownMenu";
import { SelectedCards } from "../../../atomic/molecules/SelectedCards/SelectedCards";
import { useLocalStorageState } from "../../../hooks/useLocalStorageState";
import React, { useState } from "react";

export type dropdownStates = "angular" | "reactjs" | "vuejs";

export const HomeAllCards: React.FC = (): JSX.Element => {
  const [selectedDropDown, setSelectedDropDown] =
    useState<dropdownStates>("angular");
  const [favoritePosts, setFavoritePosts] = useLocalStorageState(
    "favorite-posts",
    []
  );

  return (
    <div className="wrapper">
      <DropdownMenu dropDownStateSetter={setSelectedDropDown} />
      {selectedDropDown === "angular" && (
        <SelectedCards
          favoritePosts={favoritePosts}
          setFavoritePosts={setFavoritePosts}
          selectedDropdown={selectedDropDown}
        />
      )}
      {selectedDropDown === "reactjs" && (
        <SelectedCards
          favoritePosts={favoritePosts}
          setFavoritePosts={setFavoritePosts}
          selectedDropdown={selectedDropDown}
        />
      )}
      {selectedDropDown === "vuejs" && (
        <SelectedCards
          favoritePosts={favoritePosts}
          setFavoritePosts={setFavoritePosts}
          selectedDropdown={selectedDropDown}
        />
      )}
    </div>
  );
};
