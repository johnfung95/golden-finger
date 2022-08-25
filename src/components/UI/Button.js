import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [newCount, setNewCount] = useState(1);

  const addCountHandler = () => {
    if (props.isEnd) {
      return;
    }
    setNewCount((prevCount) => {
      return +prevCount + 1;
    });

    props.onScoreChangeHandler(newCount);
  };
  return (
    <div>
      <button
        className={`${classes.btn} ${
          props.isEnd ? classes.end : classes.start
        }`}
        onClick={addCountHandler}
      >
        Hit me!
      </button>
    </div>
  );
};

export default Button;
