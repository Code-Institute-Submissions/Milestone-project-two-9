function cardExtractor(){
    let orderedCards = [];
    while (orderedCards.length < 32){ //to iterate through each element with the selected classes

        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*3) + 0);
        cardFinal = [cardValue[j], cardSuit[i]] 
        orderedCards.push(cardFinal, cardFinal);
        
    }
}

// ______TESTS______ //
// console.log(cardFinal)
// console.log(orderedCards)
// ______TESTS______ //

function cardShuffler(){

    let cardShuffling = [];

    while (cardShuffling.length < 32){
        let orderNumber = Math.floor((Math.random()*32) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);

        if(numberCheck === false){
            cardShuffling.push(orderNumber)
        }
    }
    
}

// ______TESTS______ //
// console.log(numberCheck)
// console.log(cardShuffling)
// ______TESTS______ //