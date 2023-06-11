import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startGame = (gameTask, generateQuestion, roundsCount = 3) => {
  const userName = greeting();
  console.log(gameTask);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
