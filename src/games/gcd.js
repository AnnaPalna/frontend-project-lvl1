import readlineSync from 'readline-sync';
import generator from '../generator.js';

const findGCD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  };

const brainGcd = () => { 
    console.log("Welcome to the Brain Games!");
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i += 1) {
        const num1 = generator(1, 100);
        const num2 = generator(1, 100);
        console.log(`Question:${num1}${num2}`);
        const answer = readlineSync.question('Your answer:');

        const rightAnswer = findGCD(num1, num2);

        if (answer === rightAnswer) {
            console.log('Correct!');
        }

        else {
            console.log(`${answer} is a wrong answer ;(. Correct answer was ${rightAnswer}.Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}

export default brainGcd;
