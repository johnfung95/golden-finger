import { useState, useRef, useEffect } from "react";
import CrossfadeImage from "./CrossfadeImage.js";
import classes from "./PostPlayForm.module.css";
import ResetButton from "../GameButtons/ResetButton";
import SendResultButton from "../GameButtons/SendResultButton";
import Ranking from "../Ranking/Ranking";

const images = ["/img/click.jpg", "/img/click-fast.jpg"];

const PostPlayForm = (props) => {
  const [ranks, setRanks] = useState([]);
  const [isResultSent, setIsResultSent] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      if (imgIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex((prevIndex) => prevIndex + 1);
      }
    }, 2000);

    return clearInterval(intervalTimer);
  });

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
  };

  return (
    <div className={isResultSent ? classes.resultAfter : classes.resultBefore}>
      <p>Your Score: {props.score}</p>
      <div>
        <CrossfadeImage
          src={images[imgIndex]}
          duration={2000}
          timingFunction={"ease-out"}
        />
      </div>
      {isResultSent ? <Ranking ranks={ranks} /> : null}
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
