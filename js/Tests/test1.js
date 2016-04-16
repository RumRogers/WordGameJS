/*
The test tries to submit an unsorted set of words belonging to the base string.
Each word is submitted twice.
The expected Ranking is:
1) casting
2) string
3) this
4) cool
5) ring
6) rats
7) shit
8) gin
9) rat
10) is

Finally, the test tries to add a valid string which must not be accepted as it's not good enough to enter the HOF
*/

MYAPP.tests.push(function()
{
    var wordGame = new WordGame();
    wordGame.setBaseString("thisisacoolstring");

    try
    {
        var valid_words = ["this", "casting", "cool", "is", "as", "string", "gin", "ring", "rats", "shit", "rat"];

        // Every word should be accepted just once
        for (var i = 0; i < valid_words.length; i++)
        {
            chai.expect(wordGame.submitWord(valid_words[i])).to.equal(true, "Word \"" + valid_words[i] + "\" was not accepted"); // must be accepted
            chai.expect(wordGame.submitWord(valid_words[i])).to.equal(wordGame.outcomes[3], "Word \"" + valid_words[i] + "\" was accepted twice"); // must be rejected (already present)
        }


        var checkPosition = function (pos, word)
        {
            chai.expect(wordGame.getWordEntryAtPosition(pos)).to.equal(word, "Word \"" + word + "\" at wrong position");
        };

        checkPosition(0, valid_words[1]);
        checkPosition(1, valid_words[5]);
        checkPosition(2, valid_words[0]);
        checkPosition(3, valid_words[2]);
        checkPosition(4, valid_words[7]);
        checkPosition(5, valid_words[8]);
        checkPosition(6, valid_words[9]);
        checkPosition(7, valid_words[6]);
        checkPosition(8, valid_words[10]);
        checkPosition(9, valid_words[3]);

        // Valid and in the dictionary, not lengthy enough to be accepted
        chai.expect(wordGame.submitWord("it")).to.equal(wordGame.outcomes[2], "Word \"it\" accepted, shouldn't have been");
    }
    catch(ex)
    {
        return ex.message;
    }
    return "Test 1 passed!";
});