describe("shuffle() part one", function(){
    let orderedCards = [];
    beforeEach(()=>{
        while (orderedCards.length < TOTAL_CARDS){ 
        let j = 1
        let i = 1
        cardFinal = [CARD_VALUE[j], CARD_SUIT[i]];
        orderedCards.push(cardFinal, cardFinal);  
    }
    });
    /*
    The number of items in the array must match the 
    number of cards being used in the game. In this 
    case 30.
    */
    it ("Should return 30", function(){
        expect(orderedCards.length).toBe(30);
    })

    /*
    Checks that when a known value is passed through that
    the expect values are taken from the respective arrays
    and are pushed into another array in the expected format
    */
    it ("should return [2, Spades]", function(){
        expect (cardFinal).toEqual(["2", "Spades"])
    });

    // Shows that orderedCards is a multidimensional array
    it ("should return [2, Spades]", function(){
        expect (orderedCards[0]).toEqual(["2", "Spades"])
    });
});

describe("shuffle() part two", function(){
    let orderedCards = [];
    let cardShuffling = [];
    let cardShufflingSumTotal = 0;
    beforeEach(()=>{
    while (orderedCards.length < TOTAL_CARDS){ 
        let j = Math.floor((Math.random()*13) + 0);
        let i = Math.floor((Math.random()*4) + 0);
        cardFinal = [CARD_VALUE[j], CARD_SUIT[i]];
        orderedCards.push(cardFinal, cardFinal);  
    }
    while (cardShuffling.length < TOTAL_CARDS){
        let orderNumber = Math.floor((Math.random()*30) + 0);
        let numberCheck = cardShuffling.includes(orderNumber);
        if(numberCheck === false){
            cardShuffling.push(orderNumber);
            cardShufflingSumTotal += orderNumber;
        }
    }
    });
    
    // Shows that orderedCards has duplicate of each value
    it ("should have the same value", function(){
        expect (orderedCards[0]).toEqual(orderedCards[1])
    });
    it ("should return the sum of 0-29", function(){
        expect (cardShufflingSumTotal).toBe(435);
    });
    
    
});