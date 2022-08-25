import React from "react";
import classes from "./Timer.module.css";

const Timer = (props) => {
  let mins =
    Math.floor(props.time / 60) < 10
      ? `0${Math.floor(props.time / 60)}`
      : Math.floor(props.time / 60);
  let secs =
    Math.floor(props.time - mins * 60) < 10
      ? `0${Math.floor(props.time - mins * 60)}`
      : Math.floor(props.time - mins * 60);

  return (
    <div
      className={`${classes.clock} ${props.isEnd ? classes.end : ""}`}
    >{`${mins}:${secs}`}</div>
  );
};

export default Timer;
