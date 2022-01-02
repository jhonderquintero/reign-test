import { DownArrowSVG } from "../../../atomic/atoms/Icons/DownArrowSVG";
import { DropDownListButton } from "../../../atomic/atoms/DropDownListButton/DropDownListButton";
import { useState } from "react";
import "./styles.css";
import { VueSVG } from "../../../atomic/atoms/Icons/VueSVG";
import { AngularSVG } from "../../../atomic/atoms/Icons/AngularSVG";
import { ReactSVG } from "../../../atomic/atoms/Icons/ReactSVG";

export const DropdownMenu: React.FC<IDropDownMenu> = ({
  dropDownStateSetter,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleAngularClick = () => {
    setIsVisible(!isVisible);
    dropDownStateSetter("angular");
  };

  const handleReactClick = () => {
    setIsVisible(!isVisible);
    dropDownStateSetter("reactjs");
  };

  const handleVueClick = () => {
    setIsVisible(!isVisible);
    dropDownStateSetter("vuejs");
  };

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
        <DropDownListButton
          text="Angular"
          onClick={handleAngularClick}
          icon={<AngularSVG height="22px" width="20px" />}
        />
        <DropDownListButton
          text="Reactjs"
          onClick={handleReactClick}
          icon={<ReactSVG height="22px" width="20px" />}
        />
        <DropDownListButton
          text="Vuejs"
          onClick={handleVueClick}
          icon={<VueSVG height="22px" width="20px" />}
        />
      </ul>
    </nav>
  );
};

interface IDropDownMenu {
  dropDownStateSetter: Function;
}
