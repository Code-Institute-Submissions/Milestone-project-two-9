
const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const cardSuit = ["hearts", "spades", "clubs", "diamonds"];
let clicks = 90;
const cards = document.querySelectorAll('.card-grid');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let winCon = 0;

document.getElementById("clicker").innerHTML = clicks;
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
    checkForMatch(); 
    
    if (winCon === 16){
        alert("Well done, you've won");
    }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();

 
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    winCon += 1;
    console.log(winCon);
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

function shuffle() {
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
        let cSuit = document.getElementsByClassName("card-suit");
        cSuit[x].innerHTML = `<img class="card-image" src="assets/images/${orderedCards[i][1]}.svg.png" alt="${orderedCards[i][1]}"/>`; 
        let cData = document.getElementsByClassName("card-grid");
        cData[x].setAttribute("data-framework", orderedCards[i][0]+orderedCards[i][1]);       
    }
    $(".card-grid").children("div.card-back").show();
    cards.forEach(card => card.addEventListener('click', flipCard));
};