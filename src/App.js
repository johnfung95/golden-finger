import React, { useState, useEffect } from "react";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import Timer from "./components/Game/Timer";
import Scoreboard from "./components/Game/Scoreboard";
import classes from "./App.module.css";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (isStart) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => {
          return +prevTime - 1;
        });
      }, 1000);
      if (timeLeft <= 0) {
        return () => {
          setTimeLeft(0);
          clearTimeout(timer);
        };
      }
    }
    console.log("running");
  }, [timeLeft, isStart]);

  const getScoreHandler = (newScore) => {
    if (timeLeft > 0) {
      setScore(newScore.toString());
      setIsStart(true);
    } else {
      setIsEnd(true);
    }
  };

  return (
    <div>
      <Card>
        <Timer time={timeLeft} />
        <Scoreboard newScore={score} isStart={isStart} />
        <Button
          onScoreChangeHandler={getScoreHandler}
          count={score}
          isStart={isStart}
          isEnd={isEnd}
        />
      </Card>
    </div>
  );
}

export default App;
