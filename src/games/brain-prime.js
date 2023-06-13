import getRandNumber, { booleanToString } from '../usefulFunctions.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
};

const generateQuestion = (maxNumberLimit = 100) => {
  const number = getRandNumber(maxNumberLimit);
  const questionText = `${number}`;
  const correctAnswer = `${booleanToString(isPrime(number))}`;
  return [questionText, correctAnswer];
};

export {
  generateQuestion,
  gameTask,
};
