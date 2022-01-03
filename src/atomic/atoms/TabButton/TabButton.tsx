import React from "react";
import { ITabButton } from "./definitions";
import "./styles.css";

export const TabButton: React.FC<ITabButton> = ({
  children,
  selected,
  ...props
}) => {
  return (
    <button
      className={`${selected ? "tab-button__selected" : "tab-button"}`}
      {...props}
    >
      {children}
    </button>
  );
};
