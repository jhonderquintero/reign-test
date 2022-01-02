import React from "react";
import { IDropDownListButton } from "./definitions";
import "./styles.css";

export const DropDownListButton: React.FC<IDropDownListButton> = ({
  text,
  icon,
  ...props
}): JSX.Element => {
  return (
    <li>
      <button className="dropdown-button" {...props}>
        <div className="dropdown-button__wrapper">
          <div className="dropdown-button__wrapper__icon">{icon}</div>
          <div className="dropdown-button__wrapper__text">{text}</div>
        </div>
      </button>
    </li>
  );
};
