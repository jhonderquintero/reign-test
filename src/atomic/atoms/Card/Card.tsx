import React from "react";
import "./styles.css";

export const Card: React.FC<ICard> = ({
  centralText,
  headerIcon,
  headerText,
  rightIcon,
}): JSX.Element => {
  return (
    <div className="card">
      <div className="card__left">
        <div className="card__left__header">
          <div>{headerIcon}</div>
          <div className="card__left__header_text">
            <div>{headerText}</div>
          </div>
        </div>
        <div className="card__left__content">{centralText}</div>
      </div>
      <button className="card__right">
        <div>{rightIcon && rightIcon}</div>
      </button>
    </div>
  );
};

interface ICard {
  headerText: string;
  centralText: string;
  headerIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}
