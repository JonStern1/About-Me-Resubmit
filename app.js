var correctAnswers = 0;
var numberGuesses = 0;

var typerName = prompt ('Hello. I would sure like to know your name. Could you please type it in for me?');
alert(typerName + ' , thank you!');
console.log('Users name is ' + typerName);

var bornSeattle = prompt ('Do you think that I was born in Seattle? Please answer yes or no.');
if (bornSeattle.toLowerCase() === 'yes') {
  alert ('Sorry, I was born in Los Angeles, although moved to Seattle when I was 2.');}
  else if (bornSeattle.toLowerCase() === 'no') {
    alert ('Correct. I was born in Los Angeles, although moved to Seattle when I was 2.'), correctAnswers++;}
  else {
    alert ('Please answer yes or no to the question.');
  }
console.log('born in Seattle? ' + bornSeattle);
console.log(correctAnswers);

var likeSki = prompt ('Do you think that I like to snow ski? Yes or no');
if (likeSki.toLowerCase() === 'yes') {
  alert ('Yes, I do like to snow ski. Could you tell that by looking at the bottom of the page?'), correctAnswers++;}
  else if (likeSki.toLowerCase() === 'no') {
    alert ('Sorry. I do really like to snow ski!'); }
    else {
    alert ('A yes or no answer is required.');
  }
console.log('like to ski ' + likeSki);

var playGuitar = prompt ('Do you think that I play guitar? Yes or no.');
if (playGuitar.toLowerCase() === 'yes') {
  alert ('Yes, I do play guitar. Mostly electric. I especially like my stratocaster.'), correctAnswers++; }
  else if (playGuitar.toLowerCase() === 'no') {
    alert ('Incorrect. I do like to rock out on a 6 string!'); }
  else {
    alert ('Please answer yes or no.');
  }
console.log('play guitar ' + playGuitar);

var favoriteFood = prompt ('Is Indian food my favorite type of food? Yes or no.');
if (favoriteFood.toLowerCase() === 'yes') {
  alert ('No. Indian food is not my favorite, although it is still pretty good. I prefer Thai and Italian food.');}
  else if (favoriteFood.toLowerCase() === 'no'){
    alert ('Yes. Indian food is not number 1 on my list. That is a tie between Italian and Thai/(no pun intended)'), correctAnswers++; }
    else {
    alert ('Again, you have to answer yes or no.');
  }
console.log(favoriteFood + ' is not Indian');

var lawPractice = prompt ('Am I a former attorney? Yes or no?');
if (lawPractice.toLowerCase() === 'yes') {
  alert ('Yes. I am a recovering former attorney.'), correctAnswers++; }
  else if (lawPractice.toLowerCase() === 'no') {
    alert ('Believe it or not I am a former attorney.'); }
    else {
    alert ('You need to answer in yes or no form.');
  }
console.log('A former attorney ' + lawPractice);

var boneBreak = prompt ('I ski and play soccer. I played football in high school. Have I ever broken a bone? Yes or no');
if (boneBreak.toLowerCase() === 'yes') {
  alert ('No. Believe it or not, I have not broken a bone'); }
  else if (boneBreak.toLowerCase() === 'no') { correctAnswers++;
    var yesBreak = prompt ('I have not broken a bone. Is that crazy? Have you?'); {
      if (yesBreak.toLowerCase() === 'yes') {
        prompt ('That is too bad. Which bone?');}
      else if(yesBreak.toLowerCase() === 'no') {
        alert ('That is good. I am sure it is very painful'); }
      else {
        alert ('You really have to answer yes or no to all these questions');
      }
    }
  }
    else {
    alert ('Answer needs to be yes or no');
  }
console.log('Broken a bone ' + boneBreak);
console.log(correctAnswers);

alert ('You answered ' + correctAnswers + ' out of 6 questions about me correctly');

var loopy = function () {
  var numberGuesses = 0;
  while(numberGuesses < 4){
    console.log ('I am looping!');
    var guesserGame = prompt ('I would like you to guess my favorite number between 1 and 20. You will have 4 guesses to get the correct number. After each incorrect guess, I will tell you if your guess is too high or too low. Are you ready? Please type in a number between 1 and 20.');
    {
      if (guesserGame > 4) {
        alert ('Sorry, your answer is too high. Please try again.'); numberGuesses++;
      }
      else if (guesserGame < 4) {
        alert ('Sorry, your guess is too low. Please try again.');
        numberGuesses++;
      }
      else if (guesserGame = 4) {
        alert ('Correct. My favorite number is 4!');
        return;
      }
     else if(guesserGame = NaN){
       alert ('You must answer in number form');
     }
    }
  }
};

loopy();
