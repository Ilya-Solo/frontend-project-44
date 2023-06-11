#!/usr/bin/env node
import startGame from '../src/index.js';

const gameTask = 'What is the result of the expression?';
const getMathOperationAnswer = (firstOperand, secondOperand, operator) => {
  let operationResult;
  switch (operator) {
    case '+':
      operationResult = firstOperand + secondOperand;
      break;
    case '*':
      operationResult = firstOperand * secondOperand;
      break;
    case '-':
      operationResult = firstOperand - secondOperand;
      break;
    default:
      Error('wrong operand');
  }
  return operationResult;
};
const getRandNumber = (maxNumberLimit) => Math.round(Math.random() * maxNumberLimit);
const generateQuestion = (maxNumberLimit = 40, operatorsArray = ['+', '-', '*']) => {
  const [firstOperand, secondOperand, operator] = [getRandNumber(maxNumberLimit),
    getRandNumber(maxNumberLimit),
    operatorsArray[getRandNumber(2)]];
  const questionText = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = `${getMathOperationAnswer(firstOperand, secondOperand, operator)}`;
  return [questionText, correctAnswer];
};
startGame(gameTask, generateQuestion);
