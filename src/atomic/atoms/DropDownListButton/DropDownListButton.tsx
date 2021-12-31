import React from "react";
import { IDropDownListButton } from "./definitions";
import "./styles.css";

export const DropDownListButton: React.FC<IDropDownListButton> = ({
  text,
}): JSX.Element => {
  return (
    <li>
      <button className="dropdown-button">{text}</button>
    </li>
  );
};
