const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const cardSuit = ["hearts", "spades", "clubs", "diamonds"];

function cards(){

    let x;

    for (x = 0; x < 99; x++){ //to iterate through each element with the selected classes

    //gets a random value from cardValue
    let j = Math.floor(Math.random()*(13 - 0)) + 0;
    let cardName = cardValue[j];

    //gets a random value from cardSuit
    let i = Math.floor(Math.random()*(3 - 0)) + 0;
    let cardType = cardSuit[i];

    //inputs cardValue as the card number
    let cNumb = document.getElementsByClassName("number-text");
    cNumb[x].innerHTML = `${cardName}`;

    //uses cardSuit value for image src
    cSuit = document.getElementsByClassName("card-suit");
    cSuit[x].innerHTML = `<img class="card-image" src="assets/images/${cardType}.svg.png" alt="${cardType}"/>`;
        
}}

$(document).ready(function () {
    $(".card-back").click(function(){
        $(this).hide();
    });
});

function cardExtractor(){
    let orderedCards = [];
    while (orderedCards.length < 16){ //to iterate through each element with the selected classes

        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*3) + 0);
        cardFinal = [cardValue[j], cardSuit[i]] 
        orderedCards.push(cardFinal, cardFinal);

    }return orderedCards
}

// ______TESTS______ //
// console.log(cardFinal)
// console.log(orderedCards)
// ______TESTS______ //

function cardShuffler(){

    let cardShuffling = [];

    while (cardShuffling.length < 31){
        let orderNumber = Math.floor((Math.random()*31) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);

        if(numberCheck === false){
            cardShuffling.push(orderNumber)
            cardShuffling.push(orderNumber)
            console.log(cardShuffling)
        }
    } return cardShuffling
    
}

// ______TESTS______ //
// console.log(numberCheck)
// console.log(cardShuffling)
// ______TESTS______ //