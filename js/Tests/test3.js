/*
 This test tries to submit a bunch of well formed words which are not english words.
 The expected outcome is they're rejected due to their absence in the dictionary.
 */

MYAPP.tests.push(function()
{
    var wordGame = new WordGame();
    wordGame.setBaseString("somestring");

    try
    {
        // well formed strings, not present in the dictionary
        var valid_words = ["somestring", "trem", "ginr", "est", "timo", "serno"];

        for (var i = 0; i < valid_words.length; i++)
        {
            // must be rejected, senseless word!
            chai.expect(wordGame.submitWord(valid_words[i])).to.equal(wordGame.outcomes[4], "Word \"" + valid_words[i] + "\" was accepted, shouldn't");
        }

    }
    catch(ex)
    {
        return ex.message;
    }
    return "Test 3 passed!";
});