import readlineSync from 'readline-sync';
import generator from '../generator.js';

const getPrime = (a) => {
  if (a < 2) {
    return false;
  }

  for (let i = 2; i <= a / 2; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }

  return true;
};


const prime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = generator(1, 100);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = getPrime(number) ? 'yes' : 'no';

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${rightAnswer}.Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
export default prime;
