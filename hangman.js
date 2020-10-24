// hangman.js
const body = document.querySelector("body"),
  div = body.querySelector(".js-div");

const alphabets = "abcdefghijklmnopqrstuvwxyz";

function clickHandler(event) {
	console.log("hi");
}

function init() {
	console.log( div );
	for ( let i = 0; i < alphabets.length; i++ ) {
		const btn = document.createElement("button");
		btn.innerText = alphabets[i];
		btn.id = `btn-${alphabets[i]}`;
		btn.addEventListener("click", clickHandler);

		div.appendChild( btn );
	}
}

init();