import React, { MouseEventHandler } from "react";
import "./styles.css";

export const Card: React.FC<ICard> = ({
  centralText,
  headerIcon,
  headerText,
  rightIcon,
  clickHandler,
  url,
}): JSX.Element => {
  const handleOpenUrl = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="card animate__animated animate__bounceIn">
      <div className="card__left" onClick={handleOpenUrl}>
        <div className="card__left__header">
          <div>{headerIcon}</div>
          <div className="card__left__header_text">
            <div>{headerText}</div>
          </div>
        </div>
        <div className="card__left__content">
          {centralText.length > 149
            ? centralText.split("\n")[0].slice(0, 100) + "..."
            : centralText}
        </div>
      </div>
      <button className="card__right" onClick={clickHandler}>
        <div>{rightIcon && rightIcon}</div>
      </button>
    </div>
  );
};

export interface ICard {
  headerText: string;
  centralText: string;
  headerIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  clickHandler?: MouseEventHandler;
  url?: string;
}
