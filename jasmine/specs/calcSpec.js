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
    and are pushed into another array in the expected 
    */
    it ("should return [2, Spades]", function(){
        expect (cardFinal).toEqual(["2", "Spades"])
    });

    it ("should return [2, Spades]", function(){
        expect (orderedCards[0]).toEqual(["2", "Spades"])
    });
});
