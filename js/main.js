var MYAPP = MYAPP || {};

MYAPP.loadDictionary = function(relativePath)
{
    $.ajax({
        url : relativePath,
        dataType: "text",
        success : function (data)
        {
            var dictionary = data.split('\n');
            MYAPP.dictionary = {};

            // Let's create a hashmap instead of an array in order to access to any element of the dictionary in O(1)
            for(var i = 0; i < dictionary.length; i++)
                MYAPP.dictionary[dictionary[i]] = dictionary[i];

            MYAPP.wordGame = new WordGame();
            MYAPP.wordGame.getBaseString();
        },
        error : function()
        {
            throw "Unable to load " + relativePath + " ... Aborting.";
        }
    });
};

$(document).ready(function()
{
    MYAPP.loadDictionary('res/wordlist.txt');
});
