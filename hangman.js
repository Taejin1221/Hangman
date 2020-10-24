// hangman.js
const body = document.querySelector("body"),
  lifeSpan = body.querySelector(".js-life-span"),
  wordDiv = body.querySelector(".js-word-div"),
  buttonDiv = body.querySelector(".js-button-div"),
  useDiv = body.querySelector(".js-use-div"),
  resultH2 = body.querySelector(".js-result-h2");

const alphabets = "abcdefghijklmnopqrstuvwxyz";
const answerList = [ "apple", ""]

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

	if ( correctNum === answer.length ) {
		resultH2.innerText = "You Win!";
	}
}

function attackMan() {
	life--;
	lifeSpan.innerText = life;
	if ( life === 0 ) {
		resultH2.innerText = `You Lose!\nThe answer is ${answer}`;
	}
}

function clickedHandler(event) {
	resultH2.innerText = "You Already Use that word!";
	setTimeout(function () { resultH2.innerText = "" }, 1000 );
}

function clickHandler(event) {
	const curr = event.target;

	curr.removeEventListener("click", clickHandler);
	curr.addEventListener("click", clickedHandler );
	
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
	lifeSpan.innerText = life;

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