import React from "react";
import classes from "./PlayButton.module.css";
import Button from "../../UI/Buttons/Buttons";

const GameButtons = (props) => {
  const addCountHandler = () => {
    props.onScoreChangeHandler(props.count + 1);
  };

  return (
    <Button
      className={`${props.isEnd ? classes.end : classes.start}`}
      onClick={addCountHandler}
      disabled={props.isEnd ? true : false}
      buttonContents={"Hit me!"}
    ></Button>
  );
};

export default GameButtons;
