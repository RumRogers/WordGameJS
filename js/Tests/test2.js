/*
This test tries to submit a bunch of words which include letters NOT present within the base string.
The expected outcome is they're rejected for the presence of such letters, not because they're not included
in the dictionary.
 */

MYAPP.tests.push(function()
{
    var wordGame = new WordGame();
    wordGame.setBaseString("whatever");

    try
    {
        var invalid_words = ["wyz", "rsd", "jkl", "123", "whatener", "test"];

        // Every word should be accepted just once
        for (var i = 0; i < invalid_words.length; i++)
        {
            // must be rejected, contains letters not present in base string!
            chai.expect(wordGame.submitWord(invalid_words[i])).to.equal(wordGame.outcomes[1], "Word \"" + invalid_words[i] + "\" was accepted, shouldn't");
        }

    }
    catch(ex)
    {
        return ex.message;
    }
    return "Test 2 passed!";
});