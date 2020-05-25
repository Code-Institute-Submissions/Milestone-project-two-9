document.addEventListener('DOMContentLoaded', function() {
    shuffle();
});

const CARD_VALUE =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const CARD_SUIT = ["hearts", "spades", "clubs", "diamonds"];
let clickCounter = 70;
const cards = document.querySelectorAll('.card-grid');
let isCardFlipped = false;
let boardLocked = false;
let firstFlip, secondFlip;
let winCondition = 0;

function flipCard() { 
    if (boardLocked) return;
    clickCounter -= 1;
    $("h3 span").text(`${clickCounter}`)

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

    if (winCondition === 15){
        showWinScreen();
        return
    }

    if (clickCounter == 0){
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
    },700);
}

function showLossScreen(){
    $("#card-section").addClass("animate__animated animate__zoomOutDown");
    setTimeout(() => {
        $("#card-section").css("display", "none");
        $("#loss-screen").css("display", "flex")
    },700);
}

function playAgain(){
    $("#card-section").removeClass("animate__animated animate__zoomOutDown");
    $("#card-section").addClass("animate__animated animate__fadeIn");
    $("#loss-screen").addClass("animate__animated animate__flipOutX");
    $("#win-screen").addClass("animate__animated animate__flipOutX");
    setTimeout(() => {
        $("#win-screen").css("display", "none")
        $("#loss-screen").css("display", "none")
        $("#loss-screen").removeClass("animate__animated animate__flipOutX");
        $("#win-screen").removeClass("animate__animated animate__flipOutX");
        $("#card-section").css("display", "");
    },700);

    shuffle();
}

function shuffle() {
      //Creates a multidimensional array filled with a two of each combined value of cardValue and cardSuit
    let orderedCards = [];
    let cardShuffling = [];
    let x;
    while (orderedCards.length < 30){ 
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*4) + 0);
        cardFinal = [CARD_VALUE[j], CARD_SUIT[i]] 
        orderedCards.push(cardFinal, cardFinal);  
    }
    //Creates an array of unordered numbers to be used as index numbers for orderedCards array
    while (cardShuffling.length < 30){
        let orderNumber = Math.floor((Math.random()*30) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);
        if(numberCheck === false){
            cardShuffling.push(orderNumber)
        }
    }
    //inputs a value of a complete playing card to the HTML 
    
    for (x = 0; x < 30; x++){
        let indexnumber = cardShuffling[x];
        let cardNumber = document.getElementsByClassName("number-text");
        let cardSuit = document.getElementsByClassName("card-suit");
        let cardData = document.getElementsByClassName("card-grid");
        cardSuit[x].innerHTML = `<img class="card-image" src="assets/images/${orderedCards[indexnumber][1]}.svg.png" alt="${orderedCards[indexnumber][1]}"/>`; 
        cardNumber[x].innerHTML = `${orderedCards[indexnumber][0]}`;
        cardData[x].setAttribute("data-framework", orderedCards[indexnumber][0]+orderedCards[indexnumber][1]);       
    }
    $(".card-grid").children("div.card-back").show();
    cards.forEach(card => card.addEventListener('click', flipCard));
    clickCounter = 70;
    winCondition = 0;
    $("h3 span").text(`${clickCounter}`)
};

function showTutorialVideo(){
    $("#hide-tutorial").css("display", "none");
    $("#tutorial-video").css("display", "flex");

}