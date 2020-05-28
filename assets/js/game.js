document.addEventListener('DOMContentLoaded', function() {
    shuffle();
});

const CARD_VALUE =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const CARD_SUIT = ["hearts", "spades", "clubs", "diamonds"];
const cards = document.querySelectorAll('.card-grid');
const TOTAL_CARDS = 30;
let clickCounter = 70;
let isCardFlipped = false;
let isBoardLocked = false;
let firstFlip, secondFlip;
let winCondition = 0;

/*  Checks if cards match, they stay face up if matched or get flipped face down if not.
    Checks if all matching pairs have been flipped or if clickcounter has reached zero
*/
function flipCard() { 
    if (isBoardLocked) return; //Stops cards being flipped whilst currently flipped cards are being checked 

    if (this === firstFlip) return;//When a card has been flipped this code won't run 
    decreaseClickCounter();
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

    if (parseInt(winCondition) === 15){
        showWinScreen();
        return;
    }

    if (parseInt(clickCounter) === 0){
        showLossScreen();
        return;
    }
}

function decreaseClickCounter(){
    clickCounter -= 1;
    $("h3 span").text(`${clickCounter}`);
}

function checkForMatch() {
//dataset value is given during shuffle()
  let isMatch = firstFlip.dataset.framework === secondFlip.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

//Can no longer interact with matched cards
function disableCards() {
    firstFlip.removeEventListener('click', flipCard);
    secondFlip.removeEventListener('click', flipCard);
    winCondition += 1;
    resetBoard();
}

function unflipCards() {
  isBoardLocked = true;
    setTimeout(() => {
        $(firstFlip).children("div.card-back").show();
        $(secondFlip).children("div.card-back").show();
        resetBoard();
  }, 800);
}

function resetBoard() {
  [isCardFlipped, isBoardLocked] = [false, false];
  [firstFlip, secondFlip] = [null, null];
}

function showWinScreen(){ 
    $("#card-section").addClass("animate__animated animate__zoomOutDown");
    setTimeout(() => {
        $("#card-section").css("display", "none");
        $("#win-screen").css("display", "flex");
    },700);
}

function showLossScreen(){
    $("#card-section").addClass("animate__animated animate__zoomOutDown");
    setTimeout(() => {
        $("#card-section").css("display", "none");
        $("#loss-screen").css("display", "flex");
    },700);
}

function playAgain(){
    $("#card-section").removeClass("animate__animated animate__zoomOutDown");
    $("#card-section").addClass("animate__animated animate__fadeIn");
    $("#loss-screen").addClass("animate__animated animate__flipOutX");
    $("#win-screen").addClass("animate__animated animate__flipOutX");
    setTimeout(() => {
        $("#win-screen").css("display", "none");
        $("#loss-screen").css("display", "none");
        $("#loss-screen").removeClass("animate__animated animate__flipOutX");
        $("#win-screen").removeClass("animate__animated animate__flipOutX");
        $("#card-section").css("display", "");
    },700);

    shuffle();
}

function shuffle() {
      //Creates a multidimensional array filled with a two of each combined value of CARD_VALUE and CARD_SUIT
    let orderedCards = [];
    let cardShuffling = [];
    let x;
    while (orderedCards.length < TOTAL_CARDS){ 
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*4) + 0);
        cardFinal = [CARD_VALUE[j], CARD_SUIT[i]];
        orderedCards.push(cardFinal, cardFinal);  
    }
    //Creates an array of unordered numbers to be used as index numbers for orderedCards array
    while (cardShuffling.length < TOTAL_CARDS){
        let orderNumber = Math.floor((Math.random()*30) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);
        if(numberCheck === false){
            cardShuffling.push(orderNumber);
        }
    }
    //inputs a value of a complete playing card to the HTML 
    for (x = 0; x < TOTAL_CARDS; x++){
        let indexnumber = cardShuffling[x];
        let cardNumber = document.getElementsByClassName("number-text");
        let cardSuit = document.getElementsByClassName("card-suit");
        let cardData = document.getElementsByClassName("card-grid");
        cardSuit[x].innerHTML = `<img class="card-image" src="assets/images/${orderedCards[indexnumber][1]}.svg.png" alt="${orderedCards[indexnumber][1]}"/>`; 
        cardNumber[x].innerHTML = `${orderedCards[indexnumber][0]}`;
        cardData[x].setAttribute("data-framework", orderedCards[indexnumber][0]+orderedCards[indexnumber][1]);       
    }
    //Resets the entire board for a new round 
    $(".card-grid").children("div.card-back").show();
    cards.forEach(card => card.addEventListener('click', flipCard));
    clickCounter = 70;
    winCondition = 0;
    $("h3 span").text(`${clickCounter}`);
}

function toggleInfo(){
    $("#tutorial-info-box").slideToggle();
}