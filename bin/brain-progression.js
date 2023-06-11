#!/usr/bin/env node
import startGame from '../src/index.js';

const gameTask = 'What number is missing in the progression?';

const getRandNumber = (maxNumberLimit) => Math.round(Math.random() * maxNumberLimit);

const generateArray = (arrayItemsCount, maxStartNumber, maxDifferenceNumber) => {
  const arrayStartNumber = getRandNumber(maxStartNumber);
  const arrayDifferenceNumber = getRandNumber(maxDifferenceNumber);
  const resultArray = [];
  for (let i = 1; i <= arrayItemsCount; i += 1) {
    const arrayElement = arrayStartNumber + (i * arrayDifferenceNumber);
    resultArray.push(arrayElement);
  }
  return resultArray;
};

const generateQuestion = (arrayItemsCount = 10, maxStartNumber = 50, maxDifferenceNumber = 10) => {
  const randomArrayElementNumber = getRandNumber(arrayItemsCount - 1);
  const arraySample = generateArray(arrayItemsCount, maxStartNumber, maxDifferenceNumber);
  const correctAnswer = `${arraySample[randomArrayElementNumber]}`;
  arraySample[randomArrayElementNumber] = '..';
  const questionText = `${arraySample.join(' ')}`;
  return [questionText, correctAnswer];
};

startGame(gameTask, generateQuestion);
