let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;


let message = "";

let player = {
    name: "Frenchman",
    chips: 145
}

document.querySelector("#player-el").textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }

    return randomNumber;
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    document.querySelector("#cards-el").textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        document.querySelector("#cards-el").textContent += " " + cards[i];
    }

    document.querySelector("#sum-el").textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Add a card? ";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    }

    document.getElementById("message-el").textContent = message;
}

function newCard () {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}
