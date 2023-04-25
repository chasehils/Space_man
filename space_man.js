const countries = [
  'Montserrat',
  'Morocco',
  'Denmark',
  'Cuba',
  'Finland'
]

let answer = '';
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = countries[Math.floor(Math.random() * countries.length)];
  alert(answer);
};

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-info"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
};



randomWord();
generateButtons();
