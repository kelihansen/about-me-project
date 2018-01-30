'use strict';

// Day 1
const userName = prompt('Hello! What\'s your name?');
alert('Hi, ' + userName + '! I hope you don\'t mind if I ask you a few more questions.');
console.log('The user\'s name is ' + userName + '.');

/*const userHome = prompt('Where are you from?');
alert('How nice, ' + userName + '. I hear ' + userHome + ' is beautiful this time of year.');
console.log(userName + ' is from ' + userHome + '.');

const favoriteFood = prompt('What\'s your favorite food?');
alert('Of course, ' + userName + '! The world-renowned ' + favoriteFood + ' of ' + userHome + '.');
console.log(userName + '\'s favorite food is ' + favoriteFood + '.');

const favoriteSong = prompt('What\s your favorite song?');
alert('I can picture you now, ' + userName + ' from ' + userHome + '. Dancing to ' + favoriteSong + ' while eating ' + favoriteFood + '.');
console.log(userName + '\'s favorite song is ' + favoriteSong + '.');*/

// Day 2
const nickname = userName.charAt(0);

const hateCats = prompt('Enough about you, ' + nickname + '. (You don\'t mind if I call you ' + nickname + ', do you?) I\'m guessing you\'d like to know everything about me! First things first. Do you think I hate cats?').toLowerCase();
if (hateCats === 'yes' || hateCats === 'y') {
    alert('Silly ' + userName + '. No one could hate cats.');
} else if (hateCats === 'no' || hateCats === 'n') {
    alert('You know me so well already. Of course I don\'t!');
} else {
    alert('You can answer Yes or No (or yes or no or YeS or nO or even y or n, but you can\'t answer ' + hateCats + '! Let\'s try another one.');
}
console.log('When asked if I like cats, the user answered "' + hateCats + '".');

/* Enough about you, userName. I'm guessing you'd like to know everything about me!
First things first. Do you think I hate cats?
Y: Silly userName. No one could hate cats.
N: You know me so well already. Of course I don't!
Something else: You can answer Yes or No (or yes or no or YeS or nO or even y or n,
but you can't answer var! Let's try another one.)
How about this: Do I ride my bike to school?
Y: Nope! I'm actually a little scared of bikes.
N: Correct! I actually walk, even though I live 3 miles away.
All right, userName. Do I think cold, rocky, Pacific beaches are some of the prettiest places on earth?
Y: I do. I really do.
N: But userName, the crashing waves! The craggy coves! The dramatic light!
What do you think: Can I sit still when I hear Gloria by Laura Branigan?
Y: Oh userName. I thought you knew me.
N: It's true, I can't. Not even close.
Okay userName. Last question. Are sweaters my favorite thing to knit?
Y: Good guess, but I actually prefer hats.
N: Clever userName. I've never even finished a sweater!
*/