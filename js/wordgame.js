/*
••••••••••••••••••••••••••••••••••••••••••••••••
Copyright (C) 2015 Codesse. All rights reserved.
••••••••••••••••••••••••••••••••••••••••••••••••
*/

WordGame = function() {

    // base 36: 0-9A-Z
    // ^a-z: negation of the patterns (matches anything NOT included)
    // g: global match (does not stop at first match)
    // '': the char to replace the matched letters with
  var baseString = Math.random().toString(36).replace(/[^a-z]+/g, '');
  var MAX_POSITIONS = 10;
  var highScores = new Array(MAX_POSITIONS);
 
/*
Submit a word on behalf of a player. A word is accepted if its letters are contained in the base string used to construct the game AND if it is in the word list provided: wordlist.txt.
	
If the word is accepted and its score is high enough, the submission should be added to the high score list. If there are multiple submissions with the same score, all are accepted, BUT the first submission with that score should rank higher.
	
A word can only appear ONCE in the high score list. If the word is already present in the high score list the submission should be rejected.
	
@parameter word. The player's submission to the game. All submissions may be assumed to be lowercase and contain no whitespace or special characters.
*/	
 this.submitWord = function (word) {
   var remaining = baseString.split('');

  for(var i = 0; i < word.length; i++)
  {
   var found = false;
   for(var j = 0; j < remaining.length; j++)
    if(word[i] === remaining[j])
    {
     remaining.splice(j, 1);
     found = true;

     break;
    }
   if(found === false)
    return "Please use only letters present in your base string!";
  }

  var valid = false;
  for(var i = 0; i < MYAPP.dictionary.length; i++)
   if(word === MYAPP.dictionary[i])
   {
    valid = true;
    break;
   }

  if(valid === true)
  {
    if(this.isWordInHighScoreList(word) === false)
    {
        if(word.length > this.getScoreAtPosition(MAX_POSITIONS - 1))
        {
            this.insertInHighScores(word);
            return true;
        }
        return "The word is valid, but its not lengthy enough to enter the Hall of fame. Sorry!";

    }
      return "That word's already been found!";
  }
  return "That word is not in the dictionary! Go learn some english, dude.";

 };
 
/*
Return word entry at given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

@parameter position Index position in high score list
@return the word entry at the given position in the high score list, or null if there is no entry at the position requested
*/
 this.getWordEntryAtPosition = function (position) {

     return highScores[position] ? highScores[position].word : null;
 };
 
/*
Return the score at the given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

What is your favourite color? Please put your answer in your submission (this is for testing if you have read the comments).
 
@parameter position Index position in high score list
@return the score at the given position in the high score list, or null if there is no entry at the position requested
*/
 this.getScoreAtPosition = function (position) {

     // My favorite color is red!
 return highScores[position] ? highScores[position].score : null;
 };

  this.getBaseString = function()
  {
   console.log("Your base string is " + baseString);
  };

    this.insertInHighScores = function(word)
    {
        var newEntry = {"word": word, score: word.length};
        for(var i = 0; i < highScores.length; i++)
        {
            if(!highScores[i])
            {
                highScores[i] = newEntry;
                return;
            }

            if(word.length > this.getScoreAtPosition(i))
            {
                highScores.splice(i, 0, newEntry);
                highScores.pop();
                return;
            }
        }
    };

  this.isWordInHighScoreList = function(word)
  {
    for(var i = 0; i < highScores.length; i++)
    {
        if(highScores[i] !== undefined && highScores[i].word === word)
            return true;
    }
      return false;
  };

    this.showHallOfFame = function()
    {
        console.log("=== HALL OF FAME ===");
        for(var i = 0; i < highScores.length; i++)
        {
            var currWord = "";
            if (highScores[i] !== undefined)
                currWord = this.getWordEntryAtPosition(i) + " (score: " + this.getScoreAtPosition(i) + ")";
            console.log((i + 1) + ": " + currWord);
        }
    };
};
