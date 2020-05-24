document.addEventListener('DOMContentLoaded', function() {
    shuffle();
});

const CARD_VALUE =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const CARD_SUIT = ["hearts", "spades", "clubs", "diamonds"];
let clickCounter = 100;
const cards = document.querySelectorAll('.card-grid');
let isCardFlipped = false;
let boardLocked = false;
let firstFlip, secondFlip;
let winCondition = 0;

function flipCard() {
    
    
    if (boardLocked) return;
    clickCounter -= 1;
    document.getElementById("clicker").innerHTML = clickCounter;
    if (this === firstFlip) return;
    
    $(this).children("div.card-back").hide();
    
    if (!isCardFlipped) {
        // first click
        isCardFlipped = true;
        firstFlip = this;   
        return;
    }
    
    // second click
    secondFlip = this;
    checkForMatch();
    
    
    if (winCondition === 14){
        showWinScreen();
        return
    }

    if (clickCounter == -1){
        showLossScreen();
        return
    }
}

function checkForMatch() {
  let isMatch = firstFlip.dataset.framework === secondFlip.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstFlip.removeEventListener('click', flipCard);
    secondFlip.removeEventListener('click', flipCard);
    winCondition += 1;
    resetBoard();
}

function unflipCards() {
  boardLocked = true;

  setTimeout(() => {
    $(firstFlip).children("div.card-back").show();
    $(secondFlip).children("div.card-back").show();

    resetBoard();
  }, 800);
}

function resetBoard() {
  [isCardFlipped, boardLocked] = [false, false];
  [firstFlip, secondFlip] = [null, null];
}

function showWinScreen(){
    
    $("#card-section").addClass("animate__animated animate__zoomOutDown");
    setTimeout(() => {
    $("#card-section").css("display", "none");
    $("#win-screen").css("display", "flex")
    },500);
}

function showLossScreen(){
    $("#card-section").addClass("animate__animated animate__zoomOutDown");
    setTimeout(() => {
    $("#card-section").css("display", "none");
    $("#loss-screen").css("display", "flex")
    },800);
}

function playAgain(){
    $("#card-section").removeClass("animate__animated animate__zoomOutDown");
    $("#win-screen").css("display", "none")
    $("#loss-screen").css("display", "none")
    $("#card-section").css("display", "");
    shuffle();
}

function shuffle() {
      //Creates a multidimensional array filled with a two of each combined value of cardValue and cardSuit
    let orderedCards = [];
    
    while (orderedCards.length < 28){ 
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*4) + 0);
        cardFinal = [CARD_VALUE[j], CARD_SUIT[i]] 
        orderedCards.push(cardFinal, cardFinal);  
    }

    //Creates an array of unordered numbers to be used as index numbers for orderedCards array
    let cardShuffling = [];
    while (cardShuffling.length < 28){
        let orderNumber = Math.floor((Math.random()*28) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);
        if(numberCheck === false){
            cardShuffling.push(orderNumber)
        }
    }

    //inputs a value of a complete playing card to the HTML 
    let x;
    for (x = 0; x < 28; x++){
        let i = cardShuffling[x];
        let cNumb = document.getElementsByClassName("number-text");
        cNumb[x].innerHTML = `${orderedCards[i][0]}`;
        let cSuit = document.getElementsByClassName("card-suit");
        cSuit[x].innerHTML = `<img class="card-image" src="assets/images/${orderedCards[i][1]}.svg.png" alt="${orderedCards[i][1]}"/>`; 
        let cData = document.getElementsByClassName("card-grid");
        cData[x].setAttribute("data-framework", orderedCards[i][0]+orderedCards[i][1]);       
    }
    $(".card-grid").children("div.card-back").show();
    cards.forEach(card => card.addEventListener('click', flipCard));
    clickCounter = 100;
    winCondition = 0;
    document.getElementById("clicker").innerHTML = clicks;
};