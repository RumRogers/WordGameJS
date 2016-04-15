var MYAPP = MYAPP || {};

$(document).ready(function() {
        $.ajax({
            url : "res/wordlist.txt",
            dataType: "text",
            success : function (data) {
                MYAPP.dictionary = data.split('\n');
            }
        });

    MYAPP.wordGame = new WordGame();
    MYAPP.wordGame.getBaseString();
});
