import React from "react";
import classes from "./Timer.module.css";

const Timer = (props) => {
  return <div className={classes.clock}>{props.time}</div>;
};

export default Timer;
