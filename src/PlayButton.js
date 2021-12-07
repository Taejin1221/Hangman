// PlayButton.js
import React from "react";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const PlayButton = ({ clickHandler, userClicked }) => {
  return (
    <div className="button-container">
      {alphabets.map((val, idx) =>
        userClicked.includes(val) ? (
          <button
            className="button x"
            key={idx}
            onClick={() => alert("Already Clicked!")}
          >
            <span role="img" aria-labelledby="x">
              ❎
            </span>
          </button>
        ) : (
          <button
            key={idx}
            className="button alphabet"
            onClick={() => clickHandler(val)}
          >
            {val}
          </button>
        )
      )}
    </div>
  );
};

export default PlayButton;
