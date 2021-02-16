import readlineSync from 'readline-sync';
import generator from '../generator.js';


const progression = () => { 
    console.log("Welcome to the Brain Games!");
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    console.log('What number is missing in the progression?');

    const makeProgression = (begin, step, length) => {
    const arr = [];

    for (let i = begin; i < length * step; i += step) {
        arr.push(i);
    }
    return arr;
};

 
   for (let i = 0; i < 3; i += 1){
      const beginProg = generator(1, 10);
      const stepProg = generator(1, 10);
      const lenProg = 10;
      const progression = makeProgression(beginProg, stepProg, lenProg);
      const hiddenIndex = generator(0, lenProg - 1);
      const rightAnswer = progression[hiddenIndex];
      progression[hiddenIndex] = '..';

      const question = progression.join(' ');
     // console.log(`${question}`);
     // const answer = readlineSync.question('Your answer:');

     // const rightAnswer = progression[hiddenIndex];
     // progression[hiddenIndex] = '..';
      
      console.log(`${question}`);
      const answer = readlineSync.question('Ypur answer:');

        if (Number(answer) === rightAnswer) {
            console.log('Correct!');
        }

        else {
            console.log(`${answer} is a wrong answer ;(. Correct answer was ${rightAnswer}.Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}

export default progression;
