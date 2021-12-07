// WordInfo.js
import React from "react";

const WordInfo = ({ fruit, userClicked }) => {
  const getCurrCorrect = () => {
    let newCorrect = "";
    for (let i = 0; i < fruit.length; i++) {
      newCorrect += (userClicked.includes(fruit[i]) ? fruit[i] : "_") + " ";
    }
    return newCorrect;
  };

  return (
    <div className="word-info">
      <h1>{getCurrCorrect()}</h1>
    </div>
  );
};

export default WordInfo;
