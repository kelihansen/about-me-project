'use strict';

// used to store whether user was correct or not
let userStatus;

// intro & name collection
alert('Hi there! My name is Keli, and I\'m an aspiring web developer. Want to know more about me?');

const userName = prompt('First of all, what\'s your name?');
alert('Hi, ' + userName + '! Thanks so much for visiting. So here\'s an idea: I\'ll ask some questions on the subject of me, and you can guess the answers. All you have to do is type "Yes" or "No" ("y" or "n" if you\'re efficient that way).');

// total number of questions
let howManyQuestions = 5;

// yes or no score
let score = 0;

// initial 5 questions
let hateCats = prompt('Okay, first question. What do you think: Do I hate cats?').toLowerCase();
while (hateCats !== 'yes' && hateCats !== 'y' && hateCats !== 'no' && hateCats !== 'n') {
    hateCats = prompt('I think you forgot how to play, Erik. Try again: Do I hate cats?').toLowerCase();
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

// score report
let response;
if (score === howManyQuestions) {
    response = 'You really get me!';
} else if (score < howManyQuestions && score >= howManyQuestions / 2) {
    response = 'Well done, but I think you should get to know me better.';
} else {
    response = 'Clearly you have much more to learn about me!';
}
alert('You got ' + score + ' out of 5 questions right, ' + userName + '. ' + response);