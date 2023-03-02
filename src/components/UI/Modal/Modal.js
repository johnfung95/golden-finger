import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const [onShow, setOnShow] = useState(false);

  const onShowHandler = () => {
    setOnShow(true);
  };

  return (
    <div className={onShow ? classes.nope : classes.backdrop}>
      <div className={classes.content}>
        <h1 className={classes.greet}>Golden Finger!</h1>
        <button onClick={onShowHandler} className={classes.prePlayBtn}>
          Start
        </button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
