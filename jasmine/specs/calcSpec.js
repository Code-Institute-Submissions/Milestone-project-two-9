describe("shuffle()", function(){
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
    the number of items in the array must match the 
    number of cards being used in the game. In this 
    case 30.
    */
    it ("Should return 30", function(){
        expect(orderedCards.length).toBe(30);
    })
});
