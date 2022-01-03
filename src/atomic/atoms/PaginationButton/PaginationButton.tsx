import React from "react";
import "./styles.css";

export const PaginationButton: React.FC<IPaginationButton> = ({
  ...props
}): JSX.Element => {
  return <button className="pagination-button" {...props} />;
};

interface IPaginationButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
