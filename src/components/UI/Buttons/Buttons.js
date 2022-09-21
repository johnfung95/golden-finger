import React from "react";
import classes from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div>
      <button
        className={`${classes.btn} ${
          props.className === undefined ? "" : props.className
        }`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.buttonContents}
      </button>
    </div>
  );
};

export default Buttons;
