import React, { useState } from "react";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import Timer from "./components/Game/Timer";
import Scoreboard from "./components/Game/Scoreboard";
import classes from "./App.module.css";

function App() {
  const [score, setScore] = useState(0);

  const getScoreHandler = (newScore) => {
    setScore(newScore.toString());
  };

  return (
    <div>
      <Card>
        <Timer />
        <Scoreboard newScore={score} />
        <Button onScoreChangeHandler={getScoreHandler} count={score} />
      </Card>
    </div>
  );
}

export default App;
