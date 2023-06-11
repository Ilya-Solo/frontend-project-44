#!/usr/bin/env node
import startGame from '../src/index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getSmallestNumber = (firstNumber, secondNumber) => {
  const smallestNumber = firstNumber > secondNumber ? secondNumber : firstNumber;
  return smallestNumber;
};

const getGCD = (firstNumber, secondNumber) => {
  const smallestNumber = getSmallestNumber((firstNumber, secondNumber));
  let gcd;
  for (let i = smallestNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const getRandNumber = (maxNumberLimit) => Math.round(Math.random() * maxNumberLimit);

const generateQuestion = (maxNumberLimit = 100) => {
  const [firstNumber, secondNumber] = [getRandNumber(maxNumberLimit),
    getRandNumber(maxNumberLimit)];
  const questionText = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${getGCD(firstNumber, secondNumber)}`;
  return [questionText, correctAnswer];
};

startGame(gameTask, generateQuestion);
