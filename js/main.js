var MYAPP = MYAPP || {};

MYAPP.loadDictionary = function(relativePath)
{
    $.ajax({
        url : relativePath,
        dataType: "text",
        success : function (data)
        {
            MYAPP.dictionary = data.split('\n');
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
