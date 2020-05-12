const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const cardSuit = ["hearts", "spades", "clubs", "diamonds"];

function cards(){

    //gets a random value from cardValue
    let j = Math.floor(Math.random(0,12));
    let cardName = cardValue[j];

    //gets a random value from cardSuit
    let i = Math.floor(Math.random(0,3));
    let cardType = cardSuit[i];

    //inputs cardValue as the card number
    document.getElementById("number-text").innerHTML = `${cardName}`;

    //uses cardSuit value for image src
    document.getElementById("card-suit").innerHTML = `<img class="card-image" src="assets/images/${cardType}.svg.png" alt="Club"/>`;
}