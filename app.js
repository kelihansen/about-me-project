'use strict';

// I'll use this to store whether user was correct or not
let userStatus;

// INTRO & NAME COLLECTION
alert('Hi there! My name is Keli, and I\'m an aspiring web developer. Want to know more about me?');

const userName = prompt('Oh good! First of all, what\'s your name?');
alert('Hi, ' + userName + '! So here\'s an idea: I\'ll ask some questions on the subject of yours truly, and you can guess the answers. All you have to do is type "Yes" or "No" ("y" or "n" if you\'re efficient that way).');

// total number of questions
const howManyQuestions = 5;

// "yes or no" game score
let score = 0;

// INITIAL 5 QUESTIONS, now with looping!
let hateCats = prompt('Okay, first question. What do you think: Do I hate cats?').toLowerCase();
while (hateCats !== 'yes' && hateCats !== 'y' && hateCats !== 'no' && hateCats !== 'n') {
    hateCats = prompt('I think you forgot how to play, ' + userName + '. Try again: Do I hate cats?').toLowerCase();
}
if (hateCats === 'yes' || hateCats === 'y') {
    alert('Silly ' + userName + '. No one could hate cats.');
    userStatus = 'incorrect';
} else if (hateCats === 'no' || hateCats === 'n') {
    alert('You know me so well already. Of course I don\'t!');
    score++;
    userStatus = 'correct';
}
console.log('When asked if I hate cats, ' + userName + ' answered "' + hateCats + '."');
console.log(userName + ' is ' + userStatus + '.');

let rideBike = prompt('How about this: Do I ride my bike to school?').toLowerCase();
while (rideBike !== 'yes' && rideBike !== 'y' && rideBike !== 'no' && rideBike !== 'n') {
    rideBike = prompt('Yes or no, please! Try again: Do I ride my bike to school?').toLowerCase();
}
if (rideBike === 'yes' || rideBike === 'y') {
    alert('Nope! I\'m actually a little scared of bikes.');
    userStatus = 'incorrect';
} else if (rideBike === 'no' || rideBike === 'n') {
    alert('Correct! I actually walk, even though I live 3 miles away.');
    score++;
    userStatus = 'correct';
}
console.log('When asked if I ride my bike to school, ' + userName + ' answered "' + rideBike + '."');
console.log(userName + ' is ' + userStatus + '.');

let lovesPacific = prompt('All right, ' + userName + '. Do I think cold, rocky, Pacific beaches are some of the prettiest places on earth?').toLowerCase();
while (lovesPacific !== 'yes' && lovesPacific !== 'y' && lovesPacific !== 'no' && lovesPacific !== 'n') {
    lovesPacific = prompt('That\'s not a valid answer, ' + userName + '. You can do this. Do I think cold, rocky, Pacific beaches are some of the prettiest places on earth?');
}
if (lovesPacific === 'yes' || lovesPacific === 'y') {
    alert('I do. I really do.');
    score++;
    userStatus = 'correct';
} else if (lovesPacific === 'no' || lovesPacific === 'n') {
    alert('But ' + userName + ', the crashing waves! The craggy coves! The dramatic light!');
    userStatus = 'incorrect';
}
console.log('When asked if I think cold, rocky, Pacific beaches are some of the prettiest places on earth, ' + userName + ' answered "' + lovesPacific + '."');
console.log(userName + ' is ' + userStatus + '.');

let unmovedByGloria = prompt('What do you think: Can I sit still when I hear Gloria by Laura Branigan?').toLowerCase();
while (unmovedByGloria !== 'yes' && unmovedByGloria !== 'y' && unmovedByGloria !== 'no' && unmovedByGloria !== 'n') {
    unmovedByGloria = prompt('Yes, I can or no, I can\'t! Try one more time: Can I sit still when I hear Gloria by Laura Branigan?');
}
if (unmovedByGloria === 'yes' || unmovedByGloria === 'y') {
    alert('Oh ' + userName + '. I thought you understood me.');
    userStatus = 'incorrect';
} else if (unmovedByGloria === 'no' || unmovedByGloria === 'n') {
    alert('It\'s true, I can\'t. Not even close.');
    score++;
    userStatus = 'correct';
}
console.log('When asked if I can sit still when I hear Gloria by Laura Branigan, ' + userName + ' answered "' + unmovedByGloria + '."');
console.log(userName + ' is ' + userStatus + '.');

let loveSweaters = prompt('Okay, ' + userName + '. Last question. Are sweaters my favorite thing to knit?').toLowerCase();
while (loveSweaters !== 'yes' && loveSweaters !== 'y' && loveSweaters !== 'no' && loveSweaters !== 'n') {
    loveSweaters = prompt('Just one more yes or no and we can move on! Give it another go: Are sweaters my favorite thing to knit?');
}
if (loveSweaters === 'yes' || loveSweaters === 'y') {
    alert('Good guess, but I actually prefer hats.');
    userStatus = 'incorrect';
} else if (loveSweaters === 'no' || loveSweaters === 'n') {
    alert('Clever ' + userName + '. I\'ve never even finished a sweater!');
    score++;
    userStatus = 'correct';
}
console.log('When asked if sweaters are my favorite thing to knit, ' + userName + ' answered "' + loveSweaters + '."');
console.log(userName + ' is ' + userStatus + '.');

// SCORE REPORT
let response;
if (score === howManyQuestions) {
    response = 'You really get me!';
    // I thought getting at least half seemed pretty good
} else if (score < howManyQuestions && score >= howManyQuestions / 2) {
    response = 'Well done, but I think you should get to know me better.';
} else {
    response = 'Clearly you have much more to learn about me!';
}
alert('You got ' + score + ' out of 5 questions right, ' + userName + '. ' + response);

// NUMBER GUESSING
// first I establish my favorite number
const favNum = 17;
// I set the initial value of how many guesses the user has left
let guessesLeft = 3;
// it hurt me to read "you have 1 guesses left," so this sets up a fix
let guessesGrammar = 'guesses';
// initial prompt
let numGuess = prompt('Okay, ' + userName + ', how about this. Take a guess: What\'s my favorite number?');
for (let i = 0; i < 3; i++) {
    if (parseInt(numGuess) === favNum) {
        break;
    } else if (parseInt(numGuess) < favNum) {
        numGuess = prompt('Too low, ' + userName + '. Try again! You have ' + guessesLeft + ' ' + guessesGrammar + ' left.');
    } else if (parseInt(numGuess) > favNum) {
        numGuess = prompt('Too high, ' + userName + '. Try again! You have ' + guessesLeft + ' ' + guessesGrammar + ' left.');
    } else {
        numGuess = prompt('That doesn\'t count as a number, ' + userName + '. You have ' + guessesLeft + ' more ' + guessesGrammar + '.');
    }
    // the guess count decreases at the end of each loop cycle
    guessesLeft--;
    // this is just "guesses" becoming "guess" if 1 is left
    if (guessesLeft === 1) {
        guessesGrammar = 'guess';
    }
}

// I initally had the congratulatory alert inside the loop, but they didn't get a response if they got it right on the last guess!
if (parseInt(numGuess) === favNum) {
    alert(favNum + ' it is! Well done.');
} else if (parseInt(numGuess) !== 17) {
    alert('Sorry, ' + userName + ', you\'re out of guesses. My favorite number is 17.');
}

// STATE GUESSING
// so first is my array of states
const otherStates = ['California', 'Pennsylvania', 'New York'];
// to make them lowercase, I looped through them and "toLowerCased" each string, leaving the results in a new array
const simpleStates = [];
for (let i = 0; i < otherStates.length; i++) {
    simpleStates.push(otherStates[i].toLowerCase());
}
// I set the initial value of how many guesses the user has left
guessesLeft = 5;
// it hurt me to read "you have 1 guesses left," so this sets up a fix
guessesGrammar = 'guesses';
// finally we have the initial prompt, which returns a lowercase version of the user's answer
let stateGuess = prompt('I\'ve got one last game for you, ' + userName + '. Enter the name of a state other than Oregon. If I\'ve lived there, you win!').toLowerCase();
// the initial prompt takes guess number one, so this loop gives 5 more
for (let i = 0; i < 5; i++) {
    // the "includes" method checks if the user's answer matches any of the (lowercase) answers
    if (simpleStates.includes(stateGuess)) {
        alert('You did it, ' + userName + '! Apart from Oregon, I\'ve lived in ' + stateFormatted + '.');
        break;
    // if so, we exit the loop, if not, the user is prompted again, with an updated guess count
    } else {
        stateGuess = prompt('Not a match, ' + userName + '. You have ' + guessesLeft + ' ' + guessesGrammar + ' left.').toLowerCase();
    }
    // the guess count decreases at the end of each loop cycle
    guessesLeft--;
    // this is just "guesses" becoming "guess" if 1 is left
    if (guessesLeft === 1) {
        guessesGrammar = 'guess';
    }
}

// I'm pretty sure there's a better way to do this, but a list of elements separated by nothing by commas (no spaces) makes me cringe
const stateFormatted = [];
// after starting with an empty array (which I learned can be a const, because even though it changes, it isn't reassigned) my first state gets added
stateFormatted.push(otherStates[0]);
// then you cycle through the rest of the array and add spaces, stopping before the last element (much cooler if you add more states to the original array)
for (let i = 1; i < (otherStates.length - 1); i++) {
    stateFormatted.push(' ' + otherStates[i]);
}
// then you add the final element of the array, preceded by "and"
stateFormatted.push(' and ' + otherStates[otherStates.length - 1]);

// if user won with last guess, the user gets congratulated and informed (if not, consoled and informed)
if (simpleStates.includes(stateGuess)) {
    alert('You did it, ' + userName + '! Apart from Oregon, I\'ve lived in ' + stateFormatted + '.');
} else {
    alert('Sorry, ' + userName + ', you\'re out of guesses. Apart from Oregon, I\'ve lived in ' + stateFormatted + '.');
}