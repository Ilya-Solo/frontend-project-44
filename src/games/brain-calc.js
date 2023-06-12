import getRandNumber from '../usefulFunctions.js';

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

const generateQuestion = (maxNumberLimit = 40, operatorsArray = ['+', '-', '*']) => {
  const [firstOperand, secondOperand, operator] = [getRandNumber(maxNumberLimit),
    getRandNumber(maxNumberLimit),
    operatorsArray[getRandNumber(operatorsArray.length - 1)]];

  const questionText = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = `${getMathOperationAnswer(firstOperand, secondOperand, operator)}`;
  return [questionText, correctAnswer];
};

export {
  generateQuestion,
  gameTask,
};
