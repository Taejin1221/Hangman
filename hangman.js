// hangman.js
const body = document.querySelector("body"),
  wordDiv = body.querySelector(".js-word-div"),
  buttonDiv = body.querySelector(".js-button-div");

const alphabets = "abcdefghijklmnopqrstuvwxyz";

let answer;

function clickHandler(event) {
	console.log("hi");
}

function init() {
	// Add Button
	for ( let i = 0; i < alphabets.length; i++ ) {
		const btn = document.createElement("button");
		btn.innerText = alphabets[i];
		btn.id = `btn-${alphabets[i]}`;
		btn.addEventListener("click", clickHandler);

		buttonDiv.appendChild( btn );
	}

	answer = "apple";

	let underline = "";
	for ( let i = 0; i < answer.length; i++ ) {
		underline += "_ ";
	}

	wordDiv.innerText = underline;
}

init();