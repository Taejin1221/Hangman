// hangman.js
const body = document.querySelector("body"),
  wordDiv = body.querySelector(".js-word-div"),
  buttonDiv = body.querySelector(".js-button-div");

const alphabets = "abcdefghijklmnopqrstuvwxyz";

let life = 5;
let answer, correct;

function printCurrCorrect() {
	currCorrect = "";
	for ( let i = 0; i < answer.length; i++ ) {
		if ( correct[i] )
			currCorrect += `${answer[i]} `;
		else
			currCorrect += "_ ";
	}

	wordDiv.innerText = currCorrect;
}

function attackMan() {
	life--;
}

function clickHandler(event) {
	const curr = event.target;

	curr.removeEventListener("click", clickHandler);
	curr.addEventListener("click", function () { alert("No") } );
	
	const currAlphabet = curr.innerText;
	let isCorrect = false;

	for ( let i = 0; i < answer.length; i++ ) {
		if ( currAlphabet === answer[i] ) {
			correct[i] = true;
			isCorrect = true;
		}
	}

	if ( isCorrect ) {
		printCurrCorrect();
	} else {
		attackMan();
	}
}

function init() {
	// Add Button
	for ( let i = 0; i < alphabets.length; i++ ) {
		const btn = document.createElement("button");
		btn.id = `btn-${alphabets[i]}`;
		btn.innerText = alphabets[i];
		btn.addEventListener("click", clickHandler);

		buttonDiv.appendChild( btn );
	}

	answer = "apple";
	correct = [ ];

	for ( let i = 0; i < answer.length; i++ ) {
		correct.push( false );
	}

	printCurrCorrect();
}

init();