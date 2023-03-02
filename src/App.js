import React, { useState, useEffect } from "react";
import Card from "./components/UI/Card/Card";
import PlayButton from "./components/Game/GameButtons/PlayButton";
import Timer from "./components/Game/Timer/Timer";
import Scoreboard from "./components/Game/Scoreboard/Scoreboard";
import Modal from "./components/UI/Modal/Modal";
import classes from "./App.module.css";
import PostPlayForm from "./components/Game/Form/PostPlayForm";

const gameTime = 60; // 60 = 1 min
const initGameScore = 0;

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [score, setScore] = useState(initGameScore);
  const [timeLeft, setTimeLeft] = useState(gameTime);

  useEffect(() => {
    if (isStart && !isEnd) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => {
          return +prevTime - 1;
        });
      }, 1000);
      if (timeLeft <= 0) {
        return () => {
          setTimeLeft(0);
          setIsStart(false);
          setIsEnd(true);
          clearTimeout(timer);
        };
      }
    }
  }, [timeLeft, isStart, isEnd]);

  const getScoreHandler = (newScore) => {
    if (timeLeft > 0) {
      setScore(newScore);
      setIsStart(true);
    } else {
      setIsEnd(true);
    }
  };

  const resetHandler = () => {
    setIsStart(false);
    setIsEnd(false);
    setScore(initGameScore);
    setTimeLeft(gameTime);
  };

  const confirmHandler = (player) => {
    resetHandler();
  };

  const postPlayFormContent = (
    <Card>
      <PostPlayForm
        score={score}
        onConfirm={confirmHandler}
        onReset={resetHandler}
      />
    </Card>
  );

  const gameContent = (
    <Card>
      <h1 className={classes.title}>1 Minute Challenge</h1>
      <Timer time={timeLeft} isEnd={isEnd} />
      <Scoreboard newScore={score} isStart={isStart} />
      <PlayButton
        onScoreChangeHandler={getScoreHandler}
        count={score}
        isStart={isStart}
        isEnd={isEnd}
      />
    </Card>
  );

  return (
    <React.Fragment>
      <Modal />
      {!isEnd && gameContent}
      {isEnd && postPlayFormContent}
    </React.Fragment>
  );
}

export default App;
