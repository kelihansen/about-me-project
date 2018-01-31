'use strict';

// Day 1
const userName = prompt('Hello! What\'s your name?');
alert('Hi, ' + userName + '! I hope you don\'t mind if I ask you a few more questions.');
console.log('The user\'s name is ' + userName + '.');

const userHome = prompt('Where are you from?');
alert('How nice, ' + userName + '. I hear ' + userHome + ' is beautiful this time of year.');
console.log(userName + ' is from ' + userHome + '.');

const favoriteFood = prompt('What\'s your favorite food?');
alert('Of course, ' + userName + '! The world-renowned ' + favoriteFood + ' of ' + userHome + '.');
console.log(userName + '\'s favorite food is ' + favoriteFood + '.');

const favoriteSong = prompt('What\s your favorite song?');
alert('I can picture you now, ' + userName + ' from ' + userHome + '. Dancing to ' + favoriteSong + ' while eating ' + favoriteFood + '.');
console.log(userName + '\'s favorite song is ' + favoriteSong + '.');

// Day 2
const nickname = userName.charAt();

let userStatus;

const hateCats = prompt('Enough about you, ' + nickname + '. (You don\'t mind if I call you ' + nickname + ', do you?) I\'m guessing you\'d like to know everything about me! First things first. Do you think I hate cats?').toLowerCase();
if (hateCats === 'yes' || hateCats === 'y') {
    alert('Silly ' + userName + '. No one could hate cats.');
    userStatus = 'incorrect';
} else if (hateCats === 'no' || hateCats === 'n') {
    alert('You know me so well already. Of course I don\'t!');
    userStatus = 'correct';
} else {
    alert('You can answer Yes or No (or yes or no or YeS or nO or even y or n, but you can\'t answer ' + hateCats + '! Let\'s try another one.');
    userStatus = 'not playing by the rules';
}
console.log('When asked if I hate cats, ' + userName + ' answered "' + hateCats + '."');
console.log(userName + ' is ' + userStatus + '.');

const rideBike = prompt('How about this: Do I ride my bike to school?').toLowerCase();
if (rideBike === 'yes' || rideBike === 'y') {
    alert('Nope! I\'m actually a little scared of bikes.');
    userStatus = 'incorrect';
} else if (rideBike === 'no' || rideBike === 'n') {
    alert('Correct! I actually walk, even though I live 3 miles away.');
    userStatus = 'correct';
} else {
    alert('You can answer Yes or No (or yes or no or YeS or nO or even y or n, but you can\'t answer ' + rideBike + '! Let\'s try another one.');
    userStatus = 'not playing by the rules';
}
console.log('When asked if I ride my bike to school, ' + userName + ' answered "' + rideBike + '."');
console.log(userName + ' is ' + userStatus + '.');

const lovesPacific = prompt('All right, ' + userName + '. Do I think cold, rocky, Pacific beaches are some of the prettiest places on earth?').toLowerCase();
if (lovesPacific === 'yes' || lovesPacific === 'y') {
    alert('I do. I really do.');
    userStatus = 'correct';
} else if (lovesPacific === 'no' || lovesPacific === 'n') {
    alert('But ' + userName + ', the crashing waves! The craggy coves! The dramatic light!');
    userStatus = 'incorrect';
} else {
    alert('You can answer Yes or No (or yes or no or YeS or nO or even y or n, but you can\'t answer ' + lovesPacific + '! Let\'s try another one.');
    userStatus = 'not playing by the rules';
}
console.log('When asked if I think cold, rocky, Pacific beaches are some of the prettiest places on earth, ' + userName + ' answered "' + lovesPacific + '."');
console.log(userName + ' is ' + userStatus + '.');

const unmovedByGloria = prompt('What do you think: Can I sit still when I hear Gloria by Laura Branigan?').toLowerCase();
if (unmovedByGloria === 'yes' || unmovedByGloria === 'y') {
    alert('Oh ' + userName + '. I thought you understood me.');
    userStatus = 'incorrect';
} else if (unmovedByGloria === 'no' || unmovedByGloria === 'n') {
    alert('It\'s true, I can\'t. Not even close.');
    userStatus = 'correct';
} else {
    alert('You can answer Yes or No (or yes or no or YeS or nO or even y or n, but you can\'t answer ' + unmovedByGloria + '! Let\'s try another one.');
    userStatus = 'not playing by the rules';
}
console.log('When asked if I can sit still when I hear Gloria by Laura Branigan, ' + userName + ' answered "' + unmovedByGloria + '."');
console.log(userName + ' is ' + userStatus + '.');

const loveSweaters = prompt('Okay ' + userName + '. Last question. Are sweaters my favorite thing to knit?').toLowerCase();
if (loveSweaters === 'yes' || loveSweaters === 'y') {
    alert('Good guess, but I actually prefer hats.');
    userStatus = 'incorrect';
} else if (loveSweaters === 'no' || loveSweaters === 'n') {
    alert('Clever ' + userName + '. I\'ve never even finished a sweater!');
    userStatus = 'correct';
} else {
    alert('You can answer Yes or No (or yes or no or YeS or nO or even y or n, but you can\'t answer ' + loveSweaters + '! Let\'s try another one.');
    userStatus = 'not playing by the rules';
}
console.log('When asked if sweaters are my favorite thing to knit, ' + userName + ' answered "' + loveSweaters + '."');
console.log(userName + ' is ' + userStatus + '.');