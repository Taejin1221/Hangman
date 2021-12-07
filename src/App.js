import HangmanStatus from "./HangmanStatus";
import WordInfo from "./WordInfo";
import PlayButton from "./PlayButton";
import "./App.css";
import React, { useState } from "react";

const answerList = [
  "APPLE",
  "AVOCADO",
  "BANANA",
  "COCONUT",
  "GRAPE",
  "GRAPEFRUIT",
  "KIWI",
  "LIME",
  "ORANGE",
  "PEACH",
  "PEAR",
  "PINEAPPLE",
  "PLUM",
  "STRAWBERRY",
];

const App = () => {
  const [fruit, setFruit] = useState("");
  const [userClicked, setUserClicked] = useState([]);
  const [life, setLife] = useState(5);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [correct, setCorrect] = useState(0);

  const restartHandler = () => {
    const idx = Math.floor(Math.random() * answerList.length);

    setFruit(answerList[idx]);
    setUserClicked([]);
    setLife(5);
    setWin(false);
    setLose(false);
    setCorrect(0);
  };

  const alphabetClickHandler = (alpha) => {
    setUserClicked((oldArray) => [...oldArray, alpha]);

    const isCorrect = fruit.includes(alpha);
    if (!isCorrect) {
      life === 1 ? setLose(true) : setLife(life - 1);
    } else {
      let currCorrect = 0;
      for (const f of fruit) {
        if (f === alpha) {
          currCorrect += 1;
        }
      }
      setCorrect(correct + currCorrect);
      if (correct + currCorrect === fruit.length) {
        setWin(true);
      }
    }
  };

  if (fruit === "") {
    const idx = Math.floor(Math.random() * answerList.length);
    setFruit(answerList[idx]);
  }

  return (
    <div className="App">
      {lose || win ? (
        lose ? (
          <h1>The answer is {fruit}. Do you wanna try?</h1>
        ) : (
          <h1>You win!</h1>
        )
      ) : (
        <div>
          <HangmanStatus life={life} />
          <WordInfo fruit={fruit} userClicked={userClicked} />
          <PlayButton
            clickHandler={alphabetClickHandler}
            userClicked={userClicked}
          />
        </div>
      )}

      <button className="button restart" onClick={restartHandler}>
        Restart
      </button>
    </div>
  );
};

export default App;
