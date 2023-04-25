The game of Space Man

As a user: 
  - Display an empty page with a Spaceship on it.
  - Allow a drop down box with possible choices for words.
  - Once the category has been selected the game will begin. 
  - The user will guess letters of the alphabet to complete an
    unknown word of the category chosen. 
  - If the user guesses a letter correctly, the letter is 
    revealed.
  - If the user guesses an incorrect letter, a piece of a spaceman
    will appear. 
  - If the spaceman is completed before the word has been solved,
    the spaceman will take off into orbit and the player will lose. 
  - If the correct letters are guessed, a message saying "You 
    Won!" will appear.
  - A play again button will appear and return the user to the
    main display.
  

constants:
- alphabet
- player
- wins
- losses


state variables:
- correct guess = letter is returned
- incorrect guess, part of spaceman is displayed
- space 
- place to house guessed letters

need a container to house my 3 category choices

need a container to house the correct word

need container to house Spaceman pieces

accessed elements in the dom: 
- letter guesses - if correct, return letter, if wrong
  return spaceman part, if empty return null?

event listeners 
- if all guesses correct, display congratulations message
- if spaceman flies away, display user lost message 