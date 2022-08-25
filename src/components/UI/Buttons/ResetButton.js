import React from "react";
import classes from "./Buttons.module.css";

const ResetButton = (props) => {
  const resetHandler = () => {
    props.onClick();
  };

  return (
    <button className={classes.resetBtn} onClick={resetHandler}>
      Reset
    </button>
  );
};

export default ResetButton;
