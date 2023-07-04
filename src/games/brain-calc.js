import getRandNumber from '../usefulFunctions.js';

const gameTask = 'What is the result of the expression?';
const getMathOperationResult = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '-':
      return firstOperand - secondOperand;
    default:
      Error('wrong operand');
  }
  return operationResult;
};

const generateQuestion = (maxNumberLimit = 40, operatorsArray = ['+', '-', '*']) => {
  const [firstOperand, secondOperand, operator] = [getRandNumber(maxNumberLimit),
  getRandNumber(maxNumberLimit),
  operatorsArray[getRandNumber(operatorsArray.length - 1)]];

  const questionText = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = `${getMathOperationResult(firstOperand, secondOperand, operator)}`;
  return [questionText, correctAnswer];
};

export {
  generateQuestion,
  gameTask,
};
