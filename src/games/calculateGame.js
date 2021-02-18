import readlineSync from 'readline-sync';
import generator from '../generator.js';

//реализация функции сложения, вычитания, умножения 
const calculateGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('What is the result of the expression?');

  const makeOperation = (operator, x, y) => {
    switch (operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      default:
        return NaN;
    }
  }

  for (let i = 0; i < 3; i += 1) {
    const num1 = generator(1, 100);
    const num2 = generator(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[generator(0, operators.length - 1)];
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer:');
    
    const rightAnswer = makeOperation(operator, num1, num2);
    
    if (Number(answer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${rightAnswer}.Let's try again, ${userName}!`);
      return;
    }
}
  console.log(`Congratulations, ${userName}!`);
};

export default calculateGame;
