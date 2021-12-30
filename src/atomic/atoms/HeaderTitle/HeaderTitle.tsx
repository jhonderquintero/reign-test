import React from "react";
import { IHeaderTitle } from "./definitions";
import "./styles.css";

export const HeaderTitle: React.FC<IHeaderTitle> = ({ text }): JSX.Element => {
  return (
    <div className="header-title">
      <span className="header-title__text">{text.toUpperCase()}</span>
    </div>
  );
};
