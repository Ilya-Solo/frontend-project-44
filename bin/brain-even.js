#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const maxNumberLimit = 40;
const createNumber = (hightNumberLimit) => Math.round(Math.random() * hightNumberLimit);
const isEven = (number) => number % 2 === 0;
const answerToBoolean = (answer) => {
  let result;
  switch (answer) {
    case 'yes':
      result = true;
      break;
    case 'no':
      result = false;
      break;
    default:
      result = undefined;
  }
  return result;
};
const booleanToAnswer = (boolean) => {
  const result = boolean ? 'yes' : 'no';
  return result;
};
const startBrainEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = createNumber(maxNumberLimit);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log(typeof userAnswer);
    const userAnswerBoolean = answerToBoolean(userAnswer);
    const correctAnswerBoolean = isEven(number);
    if (correctAnswerBoolean === userAnswerBoolean) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${booleanToAnswer(correctAnswerBoolean)}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
startBrainEven();
