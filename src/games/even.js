import readlineSync from 'readline-sync';
import { generator } from '../generator.js';

const isEven = (number) => number % 2 === 0;

const getEven = () => { 
console.log("Welcome to the Brain Games!");
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

for (let i = 0; i < 3; i += 1) {
    const num = generator(1, 100);
    console.log(`Question:${num}`);
    const answer = readlineSync.question('Your answer:');
    const rightAnswer = isEven(num) ? 'yes':'no';

    const resultAnswer = answer.toLowerCase();

    if (resultAnswer === rightAnswer) {
        console.log('Correct!');
    }

    else {
        console.log(`Let's try again, ${userName}!`);
        return;
    }
}

console.log(`Congratulations, ${userName}!`);

}

export default getEven;
