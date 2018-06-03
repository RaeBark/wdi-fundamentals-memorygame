
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// assign 1st card to cardOne
var cardOne = cards[0];
// add cardOne to cardsInPlay
cardsInPlay.push(cardOne);
console.log('User filpped queen.');

// assign 3rd card to cardTwo
var cardTwo = cards[2];
// add cardTwo to cardsInPlay
cardsInPlay.push(cardTwo);
console.log('User flipped king.');

//check to see if there are 2 cards in play
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again');
	}
}