import React from "react";
import classes from "./Scoreboard.module.css";

const Scoreboard = (props) => {
  return (
    <div
      className={`${classes.board} ${
        props.newScore < 100
          ? classes.noob
          : props.newScore < 200
          ? classes.amateur
          : props.newScore < 300
          ? classes.pro
          : props.newScore < 400
          ? classes.expert
          : props.newScore < 500
          ? classes.hardcore
          : classes.god
      }`}
    >
      {props.newScore}
    </div>
  );
};

export default Scoreboard;
