const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const cardSuit = ["hearts", "spades", "clubs", "diamonds"];

function cards(){

    let orderedCards = [];
    while (orderedCards.length < 32){ //to iterate through each element with the selected classes
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*3) + 0);
        cardFinal = [cardValue[j], cardSuit[i]] 
        orderedCards.push(cardFinal, cardFinal);  
    }

    let cardShuffling = [];
    while (cardShuffling.length < 32){
        let orderNumber = Math.floor((Math.random()*32) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);
        if(numberCheck === false){
            cardShuffling.push(orderNumber)
        }
    }

    let x;

    for (x = 0; x < 32; x++){ //to iterate through each element with the selected classes
        let i = cardShuffling[x];
        //inputs cardValue as the card number
        let cNumb = document.getElementsByClassName("number-text");
        cNumb[x].innerHTML = `${orderedCards[i][0]}`;

        //uses cardSuit value for image src
        cSuit = document.getElementsByClassName("card-suit");
        cSuit[x].innerHTML = `<img class="card-image" src="assets/images/${orderedCards[i][1]}.svg.png" alt="${orderedCards[i][1]}"/>`;
            
}}

$(document).ready(function () {
    $(".card-back").click(function(){
        $(this).hide();
    });
});


    