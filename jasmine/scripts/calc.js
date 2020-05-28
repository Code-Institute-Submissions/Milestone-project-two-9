const CARD_VALUE =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const CARD_SUIT = ["Hearts", "Spades", "Clubs", "Diamonds"];
const TOTAL_CARDS = 30;
let clickCounter = 70;
let isCardFlipped = false;
let isBoardLocked = false;
let firstFlip, secondFlip;
let winCondition = 0;

function spareCards(indexnum){
    return indexnum;
}

function shuffle() {
      //Creates a multidimensional array filled with a two of each combined value of CARD_VALUE and CARD_SUIT
    let orderedCards = [];
    while (orderedCards.length < TOTAL_CARDS){ 
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*4) + 0);
        cardFinal = [CARD_VALUE[j], CARD_SUIT[i]];
        orderedCards.push(cardFinal, cardFinal);  
    }
}