// PlayButton.js
const alphabets = "abcdefghijkmlnopqrstuvwxyh".split("");

const PlayButton = () => {
  console.log(alphabets);
  return (
    <div className="play-button">
      {alphabets.map((val) => (
        <button> {val} </button>
      ))}
    </div>
  );
};

export default PlayButton;
