import readlineSync from "readline-sync";
import {getRandomNum} from "../utils.js";


export const isProgressionGame = {

  greetingsMessage: 'Добро пожаловать в игру "Арифметическая Прогрессия" ',
  rules: 'Вставь на место ".." число соответствующее прогрессии ',

  greetings() {
    console.log(this.greetingsMessage);
  },

  showRules() {
    console.log(this.rules);
  },

  playRound() {
    const condition = this.getCondition()
    console.log(`Прогрессия: ${condition}`);
    const userAnswer = this.getUserAnswer();
    console.log(`Твой ответ: ${userAnswer}`);
    const rightAnswer = this.getCorrectAnswer(condition);

    return {userAnswer, rightAnswer}
  },

  getCondition() {
    let progressionArray = this.getRandomProgression();
    const randIndex = getRandomNum(progressionArray.length - 1, 1); //написал так что бы по краям не торчали ".."
    progressionArray[randIndex] = '..';

    return progressionArray.join(', ').split(',').join('');
  },

  getRandomProgression () {
  const randomLength = getRandomNum(20, 5);
  const firstNum = getRandomNum();
  const stage = getRandomNum(10, 2);

  let progressionArray = [ ];

  for (let a = 1; a < randomLength; a += 1) {
    let stageProgression = firstNum + stage * a;
    progressionArray.push(stageProgression);
  }

  return progressionArray
  },

  getUserAnswer() {
    return Number(readlineSync.question('Пропущенное число: ').trim());
  },

  getCorrectAnswer(condition) {
    let temp = condition.split(' ');
    let correctAnswer;
    for (let i = 0; i < temp.length; i += 1) {
      if (isNaN(temp[i]) && i > 2)
        correctAnswer = Number(temp[i - 1]) - Number(temp[i - 2]) + Number(temp[i - 1]);
      if (isNaN(temp[i]) && i < 2 )
        correctAnswer = Number(temp[i + 1]) - Number(temp[i + 2]) + Number(temp[i - 1]);
    }
  return Number(correctAnswer);
  },
}
