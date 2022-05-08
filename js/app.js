'use strict';
let userPoints = 0;

let userName = prompt('What is your name?');
alert ('Welcome to my About Me page, ' + userName + '.');
console.log(userName);

let questionOne = prompt('Yes or No. Mandy was born in Tallahassee, Florida.');

if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  alert('Correct! Mandy was born in Nashville. +1 Point!');
  userPoints++;
  alert('You have ' + userPoints + ' points.');
  //console.log(questionOne);
}
else {
  alert('Incorrect. Mandy was not born in Tallahassee.');
}

let questionTwo = prompt('Yes or No. Mandy has a cat named Gremlin.');

if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
  alert('Correct! Mandy has a cat named Gizmo. +1 Point!');
  userPoints++;
  alert('You have ' + userPoints + ' points.');
  //console.log(questionTwo);
}
else {
  alert('Incorrect. Mandy does not have a cat named Gremlin.');
}

let questionThree = prompt('Yes or No. Mandy is a music teacher.');

if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
  alert('Correct! Mandy teaches music to K-5 students. +1 Point!');
  userPoints++;
  alert('You have ' + userPoints + ' points.');
  //console.log(questionThree);
}
else {
  alert('Incorrect. Mandy does teach music.');
}

let questionFour = prompt('Yes or No. Mandy has worked at Waffle House.');

if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
  alert('Correct! Mandy has worked at Waffle House. +1 Point!');
  userPoints++;
  alert('You have ' + userPoints + ' points.');
  //console.log(questionFour);
}
else {
  alert('Incorrect. Mandy has worked at Waffle House.');
}

let questionFive = prompt('Yes or No. One of Mandy\'s goals is to "Build a solid network of tech professionals."');

if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  alert('Correct, ' + userName + '. Mandy wants to build a solid network of tech professionals. +1 Point!');
  userPoints++;
  alert('You have ' + userPoints + ' points.');
  //console.log(questionFive);
}
else {
  alert('Incorrect, ' + userName + '. One of Mandy\'s goals is to build a solid network of tech professionals.');
}

function guessNumber () {
  let userAnswer = prompt('Enter a number 1-10');
  let correctAnswer = 7;
  let attempts = 5;

  for (let i = 1; i < attempts; i++){
    while(userAnswer <1 || userAnswer >10){
      userAnswer = prompt('Please Try Again! A number 1-10!')
    }
    if (userAnswer == correctAnswer) {
      alert ('CORRECT! Proceed.');
      userPoints++;
      alert('You have ' + userPoints + ' points.');
      break;
    } else if (userAnswer > correctAnswer) {
      userAnswer = prompt('Too High. Please Try Again! A number 1-10!');
    } else if (userAnswer < correctAnswer) {
      userAnswer = prompt('Too Low. Please Try Again! A number 1-10!');
    }
    if(i == 4){
      alert('The Correct Answer Was 7.');
    }
  }
}

guessNumber();

let activityGuess = prompt('What is one of Mandy\'s top six favorite recreational activities?');
const activities = ['Dungeons & Dragons', 'Reading', 'Playing Board & Card Games', 'Self Care', 'Going to the Beach', 'Video Games'];

for (let i = 1; i < activities.length; i++){
  if(activities.includes(activityGuess)){
    alert('Correct! +1 Point!');
    userPoints++;
    alert('You have ' + userPoints + ' points.');
    break;
  } else if (!activities.includes(activityGuess)){
    activityGuess = prompt('Incorrect, try again!');
  } if (i === 5) {
    alert('Those are not Mandy\'s favorite activities.');
  }
}


