import { useState, useRef, useEffect } from "react";
import classes from "./PostPlayForm.module.css";
import ResetButton from "../GameButtons/ResetButton";
import SendResultButton from "../GameButtons/SendResultButton";

const PostPlayForm = (props) => {
  const [ranks, setRanks] = useState([]);
  const [isResultSent, setIsResultSent] = useState(false);

  const getRankData = async () => {
    const res = await fetch(
      "https://golden-finger-ranking-default-rtdb.firebaseio.com/ranking.json"
    );

    const data = await res.json();
    const arr = [];
    for (const key in data) {
      const newObj = {
        key: key,
        name: data[key].name,
        score: data[key].score,
      };
      arr.push(newObj);
    }

    arr.sort((a, b) => (a.score < b.score ? 1 : b.score < a.score ? -1 : 0));
    const top10 = arr.splice(0, 10);
    setRanks(top10);
  };

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

    setIsResultSent(true);
    await getRankData();
    // props.onConfirm(playerInfo);
  };

  return (
    <div className={isResultSent ? classes.resultAfter : classes.resultBefore}>
      <p>Your Score: {props.score}</p>
      <ul className={classes.rankList}>
        <h1 className={isResultSent ? classes.show : classes.hidden}>
          Current Top 10 Scores:
        </h1>
        {ranks.length > 0
          ? ranks.map((rank) => {
              return (
                <li className={classes.rankItems} key={rank.key}>
                  <p>Name: {rank.name}</p>
                  <p>Score: {rank.score}</p>
                </li>
              );
            })
          : null}
      </ul>
      <form onSubmit={submitFormHandler} className={classes.form}>
        <label
          htmlFor="name"
          className={`${classes.label} ${
            isResultSent ? classes.hidden : classes.show
          }`}
        >
          May I have your Name?
        </label>
        <input
          type="text"
          id="name"
          className={`${classes.input} ${
            isResultSent ? classes.hidden : classes.show
          }`}
          ref={nameInput}
          required
        />
        <div className={classes.btnControl}>
          <div className={isResultSent ? classes.hidden : classes.show}>
            <SendResultButton />
          </div>
          <div>
            <ResetButton onClick={resetGameHandler} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostPlayForm;
