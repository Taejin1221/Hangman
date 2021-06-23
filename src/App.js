import HangmanStatus from "./HangmanStatus";
import WordInfo from "./WordInfo";
import PlayButton from "./PlayButton";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <HangmanStatus></HangmanStatus>
      <WordInfo></WordInfo>
      <PlayButton></PlayButton>
    </div>
  );
};

export default App;
