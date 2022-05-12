var words = ["arsenal","dog", "cat", "weiners", "supreme", "beer", "apex legends", "burrito", "ficus", "carrots", "vodka", "white claw"];

//Pick a Random word from Array
var randomWord = words [Math.floor((Math.random() * words.length))];

//sets up the answerArray to show how many letters there are using '_'
var answerArray = [];
  for(var i=0; i < randomWord.length; i++){
   answerArray[i] ='_ '
  }

// create variable to hold the number of remaining letters to be guessed
var remainingLetters = randomWord.length;

while (remainingLetters > 0){
alert(answerArray.join(""))
  var guess = prompt ("Guess a letter")
    if(guess == null){
//exit the game loop
    break;
}
//if the guess is more than one letter 
    else if (guess.length !==1){
      alert("guess again...")
} else {


  for(j=0; j< randomWord.length;j++){
    if(randomWord[j] === guess){
      answerArray[j] = guess;
      remainingLetters --;
    } 
   }
  }
 }
alert(answerArray.join(""));
alert("Good Job! The answer was " + randomWord);