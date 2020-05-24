document.addEventListener('DOMContentLoaded', function() {
    shuffle();
});

const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const cardSuit = ["hearts", "spades", "clubs", "diamonds"];
let clicks = 100;
const cards = document.querySelectorAll('.card-grid');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let winCon = 0;

function flipCard() {
    clicks -= 1;
    document.getElementById("clicker").innerHTML = clicks;
    
    if (lockBoard) return;
    if (this === firstCard) return;
    
    $(this).children("div.card-back").hide();
    
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;   
        return;
    }
    
    // second click
    secondCard = this;
    clicks -= 1;
    checkForMatch(); 
    
    if (winCon === 14){
        showWinScreen();
        return
    }

    if (clicks === 0){
        alert("Oh no, you've lost");
        shuffle();
        return
    }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    winCon += 1;
    resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    $(firstCard).children("div.card-back").show();
    $(secondCard).children("div.card-back").show();

    resetBoard();
  }, 800);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function showWinScreen(){
    
    $("#card-section").addClass("animate__animated animate__zoomOutDown");
    setTimeout(() => {
    $("#card-section").css("display", "none");
    $("#win-screen").css("display", "flex")
    },1000);
}

function playAgain(){
    $("#card-section").removeClass("animate__animated animate__zoomOutDown");
    $("#win-screen").css("display", "none")
    $("#card-section").css("display", "");
    shuffle();
}

function shuffle() {
      //Creates a multidimensional array filled with a two of each combined value of cardValue and cardSuit
    let orderedCards = [];
    
    while (orderedCards.length < 28){ 
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*4) + 0);
        cardFinal = [cardValue[j], cardSuit[i]] 
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
    clicks = 100;
    winCon = 0;
    document.getElementById("clicker").innerHTML = clicks;
};