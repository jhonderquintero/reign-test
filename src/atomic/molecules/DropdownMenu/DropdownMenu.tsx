import { DownArrowSVG } from "../../../atomic/atoms/Icons/DownArrowSVG";
import { DropDownListButton } from "../../../atomic/atoms/DropDownListButton/DropDownListButton";
import { useState } from "react";
import "./styles.css";

export const DropdownMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav role="navigation" className=" dropdown" id="nav">
      <div className="dropdown__header" onClick={handleClick}>
        <p className="dropdown__header__text">Select your news</p>
        <DownArrowSVG width="20px" height="14px" />
      </div>
      <ul
        className="dropdown__list"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <DropDownListButton text="Angular" onClick={handleClick} />
        <DropDownListButton text="Reactjs" onClick={handleClick} />
        <DropDownListButton text="Vuejs" onClick={handleClick} />
      </ul>
    </nav>
  );
};
