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
        
    
     if ($(".card-back").is(":hidden"));
        {
            $(".card-back").show();
        }
}}

$(document).ready(function () {
    $(".card-back").click(function(){
        $(this).hide();
    });
});
