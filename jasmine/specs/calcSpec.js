const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const cardSuit = ["Hearts", "Spades", "Clubs", "Diamonds"];

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
        let cardname = cardValue[2];
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
        let cardname = cardValue[i];
        let indexnum = isNaN(cardname);
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    //checks specific value is being returned from cardSuit
    it("should return Hearts", function(){
        // arrange
        let cardname = cardSuit[0];
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
        let cardname = cardSuit[i];
        let indexnum = isNaN(cardname);
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    //checks specific values are being called and being combined in the correct way
    it("should return AofHearts ", function(){
        // arrange
        let cardType = cardSuit[0];
        let cardname = cardValue[0];
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
        let cardType = cardSuit[i];

        let j = Math.floor(Math.random(0,12));
        let cardname = cardValue[j];

        let indexnum = isNaN (cardname + "of"+ cardType);
        // act
        const result = spareCards(indexnum);
        //assert
        expect(result).toBe(true);
    });
});