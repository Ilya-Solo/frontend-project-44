import getRandNumber from '../usefulFunctions.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateQuestion = (maxNumberLimit = 100) => {
  const number = getRandNumber(maxNumberLimit);
  const questionText = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [questionText, correctAnswer];
};
export {
  generateQuestion,
  gameTask,
};
