#!/usr/bin/env node
import startGame from '../src/index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandNumber = (maxNumberLimit) => Math.round(Math.random() * maxNumberLimit);

const isPrime = (number) => {
  if (number % 2 === 0 || number < 2) return false;

  for (let i = Math.floor(number / 2); i > 1; i -= 2) {
    if (number % i === 0) return false;
    if (i % 2 === 0) i += 1;
  }
  return true;
};

const booleanToString = (boolean) => (boolean ? 'yes' : 'no');

const generateQuestion = (maxNumberLimit = 100) => {
  const number = getRandNumber(maxNumberLimit);
  const questionText = `${number}`;
  const correctAnswer = `${booleanToString(isPrime(number))}`;
  return [questionText, correctAnswer];
};
startGame(gameTask, generateQuestion);
