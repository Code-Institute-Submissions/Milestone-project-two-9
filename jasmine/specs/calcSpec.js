//Predecessor to shuffle()
describe("randomiser", function(){

    // test one
    it("should return a number", function(){
        // arrange
        let indexnum = 2;
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(2);
    });

    //test two
    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(1,9));
        let indexnum = isFinite(i)
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    //checks specific value is being returned from cardValue
    it("should return 3", function(){
        // arrange
        let cardname = CARD_VALUE[2];
        let indexnum = cardname;
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe("3");
    });

    //checks any value from cardValue can be called and has correct data type
    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(0,12));
        let cardname = CARD_VALUE[i];
        let indexnum = isNaN(cardname);
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    //checks specific value is being returned from cardSuit
    it("should return Hearts", function(){
        // arrange
        let cardname = CARD_SUIT[0];
        let indexnum = cardname;
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe("Hearts");
    });

    //checks any value from cardSuit can be called and has correct data type
    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(0,3));
        let cardname = CARD_SUIT[i];
        let indexnum = isNaN(cardname);
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    //checks specific values are being called and being combined in the correct way
    it("should return AofHearts ", function(){
        // arrange
        let cardType = CARD_SUIT[0];
        let cardname = CARD_VALUE[0];
        let indexnum = cardname + "of"+ cardType;
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe("AofHearts");
    });

    //checks any value from cardSuit and cardValue can be called and has correct data type
    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(0,3));
        let cardType = CARD_SUIT[i];

        let j = Math.floor(Math.random(0,12));
        let cardname = CARD_VALUE[j];

        let indexnum = isNaN (cardname + "of"+ cardType);
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(true);
    });
});

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
