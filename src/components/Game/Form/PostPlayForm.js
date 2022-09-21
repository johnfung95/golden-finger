import { useRef } from "react";
import classes from "./PostPlayForm.module.css";
import ResetButton from "../GameButtons/ResetButton";
import SendResultButton from "../GameButtons/SendResultButton";

const PostPlayForm = (props) => {
  const resetGameHandler = () => {
    props.onReset();
  };

  const nameInput = useRef();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const playerInfo = { name: enteredName, score: props.score };

    await fetch(
      "https://golden-finger-ranking-default-rtdb.firebaseio.com/ranking.json",
      {
        method: "POST",
        body: JSON.stringify(playerInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    props.onConfirm(playerInfo);
  };

  return (
    <div className={classes.result}>
      <p>Your Score: {props.score}</p>
      {/* show ranking after submitting score */}
      <form onSubmit={submitFormHandler} className={classes.form}>
        <label htmlFor="name" className={classes.label}>
          May I have your Name?
        </label>
        <input
          type="text"
          id="name"
          className={classes.input}
          ref={nameInput}
        />
        <div className={classes.btnControl}>
          <SendResultButton />
          <ResetButton onClick={resetGameHandler} />
        </div>
      </form>
    </div>
  );
};

export default PostPlayForm;
