import React from "react";
import "./styles.css"

export const Card = () => {
  return (
    <div className="card">
      <div className="card__left">
        <div className="card__left__header">3 hours ago</div>
        <div className="card__left__content">blablabla</div>
      </div>
      <div className="card__right">logo</div>
    </div>
  );
};
