const countries = [
  'montserrat',
  'morocco',
  'denmark',
  'cuba',
  'finland',
  'switzerland',
  'malawi',
  'nauru'
]

let answer = '';
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = countries[Math.floor(Math.random() * countries.length)];

};
// created buttons for letter choices
function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
};

function reset() {
  mistakes = 0;
  guessed = [];
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons(); 
}

// choose a letter and run the function to see if the letter is correct or if
// there is a mistake

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).style.opacity = "0.2";
  document.getElementById(chosenLetter).setAttribute('disabled', true);


  
        

  alert(answer);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
  

  }
}



function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('dashSpot').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You lost!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_")).join('');

  document.getElementById('dashSpot').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;

}

document.getElementById('maxWrong').innerHTML = maxWrong;


randomWord();
generateButtons(); 
guessedWord();
updateMistakes();
