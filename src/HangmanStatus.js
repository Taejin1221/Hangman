// HangmanStatus.js
import React from "react";

const HangmanStatus = ({ life }) => {
  return (
    <div className="hangman-status">
      <h1> Your Life: {life} </h1>
    </div>
  );
};

export default HangmanStatus;
