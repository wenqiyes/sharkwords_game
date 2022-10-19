const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;
let numCorrect =0

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // Replace this with your code
  
  if(document.querySelectorAll(`div.${letter}`).length >1){
    for (const letterDiv of document.querySelectorAll(`div.${letter}`)){
      letterDiv.innerHTML = letter
    }
    numCorrect += document.querySelectorAll(`div.${letter}`).length 

  } else{
    document.querySelector(`div.${letter}`).innerHTML = letter
    numCorrect +=1
  }
  if(numCorrect ===document.querySelectorAll('div.letter-box').length){
    document.querySelector('#win').style.display=''
  }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
  document.querySelector('#shark-img').innerHTML=`<img src="/static/images/guess${numWrong}.png">`
  if (numWrong===5){
    for(const button of document.querySelectorAll('button')){
      button.disabled = true
    }
    document.querySelector('#play-again').style.display =''
  }

};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', () => {
      disableLetterButton(button)
      const letter = button.innerHTML;
      if(isLetterInWord(letter)){
        handleCorrectGuess(letter)
      } else{
        handleWrongGuess(letter)
      }
    })
   
  }

  for(const a of document.querySelectorAll('a')) {
    a.addEventListener('click',()=>{
      resetGame()
    })
  }

 
})();
