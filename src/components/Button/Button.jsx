import {} from "react";
import classes from "./Button.module.css";

export const Button = ({ onClick, isActive, isDisabled, children }) => {
  return (
    <button className={`${classes.btn} ${isActive ? classes.active : ""}`} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};
