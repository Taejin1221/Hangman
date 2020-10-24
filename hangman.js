// hangman.js
const body = document.querySelector("body"),
  wordDiv = body.querySelector(".js-word-div"),
  buttonDiv = body.querySelector(".js-button-div"),
  useDiv = body.querySelector(".js-use-div");

const alphabets = "abcdefghijklmnopqrstuvwxyz";

let life = 5, correctNum = 0;
let answer, correctIdxes;

function printCurrCorrect() {
	currCorrect = "";
	for ( let i = 0; i < answer.length; i++ ) {
		if ( correctIdxes[i] )
			currCorrect += `${answer[i]} `;
		else
			currCorrect += "_ ";
	}

	wordDiv.innerText = currCorrect;

	if ( correctNum === answer.length )
		alert("You win!");
}

function attackMan() {
	life--;
	if ( life === 0 )
		alert("You Lose");
}

function clickHandler(event) {
	const curr = event.target;

	curr.removeEventListener("click", clickHandler);
	curr.addEventListener("click", function () { alert("No") } );
	
	const currAlphabet = curr.innerText;

	let currUse = useDiv.innerText;
	currUse = `${currUse} ${currAlphabet}`;
	useDiv.innerText = currUse;

	let isCorrect = false;
	for ( let i = 0; i < answer.length; i++ ) {
		if ( currAlphabet === answer[i] ) {
			correctIdxes[i] = true;
			correctNum++;
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
	correctIdxes = [ ];

	for ( let i = 0; i < answer.length; i++ ) {
		correctIdxes.push( false );
	}

	printCurrCorrect();

	useDiv.innerText = " ";
}

init();