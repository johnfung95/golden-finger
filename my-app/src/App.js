import React from "react";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import Timer from "./components/Game/Timer";
import Scoreboard from "./components/Game/Scoreboard";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <Card>
        <Timer />
        <Scoreboard />
        <Button />
      </Card>
    </div>
  );
}

export default App;
