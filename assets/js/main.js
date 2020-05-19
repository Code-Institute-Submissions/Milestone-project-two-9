const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const cardSuit = ["hearts", "spades", "clubs", "diamonds"];

function cards(){

    //Creates a multidimensional array filled with a two of each combined value of cardValue and cardSuit
    let orderedCards = [];
    while (orderedCards.length < 32){ 
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*3) + 0);
        cardFinal = [cardValue[j], cardSuit[i]] 
        orderedCards.push(cardFinal, cardFinal);  
    }

    //Creates an array of unordered numbers to be used as index numbers for orderedCards array
    let cardShuffling = [];
    while (cardShuffling.length < 32){
        let orderNumber = Math.floor((Math.random()*32) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);
        if(numberCheck === false){
            cardShuffling.push(orderNumber)
        }
    }

    //inputs a value of a complete playing card to the HTML 
    let x;
    for (x = 0; x < 32; x++){
        let i = cardShuffling[x];
        let cNumb = document.getElementsByClassName("number-text");
        cNumb[x].innerHTML = `${orderedCards[i][0]}`;
        cSuit = document.getElementsByClassName("card-suit");
        cSuit[x].innerHTML = `<img class="card-image" src="assets/images/${orderedCards[i][1]}.svg.png" alt="${orderedCards[i][1]}"/>`;
            
}}

$(document).ready(function () {
    $(".card-back").click(function(){
        $(this).hide();
    });
});


    