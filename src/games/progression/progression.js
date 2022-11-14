import readlineSync from "readline-sync";
import {getRandomNum, getRandomProgression} from "../utils.js";


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
    console.log(condition);
    const userAnswer = this.getUserAnswer();
    const rightAnswer = this.getCorrectAnswer(condition);
    console.log(rightAnswer);
    return {userAnswer, rightAnswer}
  },

  getCondition() {
    let progressionArray = getRandomProgression();
    const randIndex = getRandomNum(progressionArray.length - 1, 1); //написал так что бы по краям не торчали ".."
    progressionArray[randIndex] = '..';

    return progressionArray.join(', ').split(',').join('');
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
