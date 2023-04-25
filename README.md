The game of Space Man
![spaceman_start](https://user-images.githubusercontent.com/128996101/234357240-3e2c1193-22e2-421a-af30-a9d564ccab1d.jpg)
![spaceman_game](https://user-images.githubusercontent.com/128996101/234357262-7213efc6-8779-490b-9d0f-5a68940d8969.jpg)

As a user: 
  - Display an page that has blocks that are empty.
  - Three boxes will be available to choose topics from.
  - Once the category has been selected the game will begin. 
  - The user will guess letters of the alphabet to complete an
    unknown word of the category chosen. 
  - If the user guesses a letter correctly, the letter is 
    revealed.
  - If the user guesses an incorrect letter, a piece of a spaceman
    will appear. 
  - The user will have 5 oppurtunities to guess the correct word.  
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
