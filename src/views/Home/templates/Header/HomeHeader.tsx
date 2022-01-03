import React from "react";
import { IHomeHeader } from "./definitions";
import "./styles.css";

export const HomeHeader: React.FC<IHomeHeader> = ({
  LeftElement,
}): JSX.Element => {
  return (
    <header className="header">
      <div>{LeftElement}</div>
    </header>
  );
};
