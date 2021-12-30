import React from "react";
import { IHomeHeader } from "./definitions";
import "./styles.css"

export const HomeHeader: React.FC<IHomeHeader> = ({
  LeftElement,
  CenterElement,
  RightElement,
}): JSX.Element => {
  return (
    <header className="header">
      {LeftElement}
      {/* <div className="header__center-element">{CenterElement}</div>
      <div className="header__right-element">{RightElement}</div> */}
    </header>
  );
};
