const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;

const flipCard = (e) => {
	// console.log(e.target);
	let clickedCard = e.target; //getting user clicked card
	if (clickedCard !== cardOne && !disableDeck) {
		clickedCard.classList.add("flip");
		if (!cardOne) {
			//return the cardOne value to clickedCard
			return (cardOne = clickedCard);
		}
		cardTwo = clickedCard;
		disableDeck = true;
		let cardOneImg = cardOne.querySelector("img").src,
			cardTwoImg = cardTwo.querySelector("img").src;

		matchCards(cardOneImg, cardTwoImg);
	}
};

const matchCards = (img1, img2) => {
	// console.log(img1, img2);

	if (img1 === img2) {
		//if two card images matched
		cardOne.removeEventListener("click", flipCard);
		cardTwo.removeEventListener("click", flipCard);
		cardOne = cardTwo = ""; //Setting both card values to blank
		return (disableDeck = false);
	}
	//if two cards do not match
	setTimeout(() => {
		//adding shake class to both cards after 400ms
		cardOne.classList.add("shake");
		cardTwo.classList.add("shake");
	}, 400);

	setTimeout(() => {
		//adding shake class to both cards after 400ms
		cardOne.classList.remove("shake", "flip");
		cardTwo.classList.remove("shake", "flip");
		cardOne = cardTwo = ""; //setting both card value to blank
		disableDeck = false;
	}, 1200);
};

cards.forEach((card) => {
	console.log(card);
	card.addEventListener("click", flipCard);
});
