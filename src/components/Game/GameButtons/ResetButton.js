import React from "react";
import classes from "./ResetButton.module.css";
import Button from "../../UI/Buttons/Buttons";

const ResetButton = (props) => {
  const resetHandler = () => {
    props.onClick();
  };

  return (
    <Button
      className={classes.resetBtn}
      onClick={resetHandler}
      buttonContents={"Reset"}
    ></Button>
  );
};

export default ResetButton;
