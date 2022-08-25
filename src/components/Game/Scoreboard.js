import React from "react";
import classes from "./Scoreboard.module.css";

const Scoreboard = (props) => {
  return (
    <div
      className={`${classes.board} ${
        props.isStart === true ? classes.startCount : ""
      }`}
    >
      {props.newScore}
    </div>
  );
};

export default Scoreboard;
