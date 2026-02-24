import {  } from 'react';
import classes from './Button.module.css';

export const Button = (props) => {
  const isPrimary = true;
  return (
    <button 
      className={`${classes.btn} ${isPrimary ? classes.primary : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};