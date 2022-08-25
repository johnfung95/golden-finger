import React from "react";
import classes from "./Buttons.module.css";

const PlayButton = (props) => {
  const addCountHandler = () => {
    props.onScoreChangeHandler(props.count + 1);
  };

  return (
    <div>
      <button
        className={`${classes.btn} ${
          props.isEnd ? classes.end : classes.start
        }`}
        onClick={addCountHandler}
        disabled={props.isEnd ? true : false}
      >
        Hit me!
      </button>
    </div>
  );
};

export default PlayButton;
