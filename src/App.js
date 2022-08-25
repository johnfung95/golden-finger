import React, { useState, useEffect } from "react";
import Card from "./components/UI/Card/Card";
import PlayButton from "./components/UI/Buttons/PlayButton";
import ResetButton from "./components/UI/Buttons/ResetButton";
import Timer from "./components/Game/Timer/Timer";
import Scoreboard from "./components/Game/Scoreboard/Scoreboard";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

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

  const getResetHandler = () => {
    setIsStart(false);
    setIsEnd(false);
    setScore(0);
    setTimeLeft(10);
  };

  return (
    <div>
      <Card>
        <Timer time={timeLeft} />
        <Scoreboard newScore={score} isStart={isStart} />
        <PlayButton
          onScoreChangeHandler={getScoreHandler}
          count={score}
          isStart={isStart}
          isEnd={isEnd}
        />
        {isEnd ? <ResetButton onClick={getResetHandler} /> : null}
      </Card>
    </div>
  );
}

export default App;
