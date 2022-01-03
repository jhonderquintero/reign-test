import React from "react";
import { IPaginationButton } from "./definitions";
import "./styles.css";

export const PaginationButton: React.FC<IPaginationButton> = ({
  ...props
}): JSX.Element => {
  return <button className="pagination-button" {...props} />;
};
