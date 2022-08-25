import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [newCount, setNewCount] = useState(1);

  const addCountHandler = () => {
    setNewCount((prevCount) => {
      return +prevCount + 1;
    });

    props.onScoreChangeHandler(newCount);
  };
  return (
    <div>
      <button className={classes.btn} onClick={addCountHandler}>
        Hit me!
      </button>
    </div>
  );
};

export default Button;
