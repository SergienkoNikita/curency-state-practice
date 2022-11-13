import readlineSync from "readline-sync";
import {getRandomNum} from "../utils.js"

export const isGcdGame = {

  greetingsMessage: 'Приветствую тебя в игре "Наибольший общий делитель"!',
  rules: 'Ты должен правильно определить наибольшее число на которые делятся два следующих чилса: ',

  greetings() {
    console.log(this.greetingsMessage);
  },

  showRules() {
    console.log(this.rules)
  },

  playRound() {
    const condition = this.getCondition();
    console.log(condition);
    let firstNum = condition[0];
    let secondNum = condition[1];
    const userAnswer = this.getUserAnswer();
    const rightAnswer = this.getCorrectAnswer(firstNum, secondNum);
    return {userAnswer, rightAnswer};
  },

  getCondition() {
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();
    return `${firstNum} ${secondNum}`;
  },

  getUserAnswer() {
    return readlineSync.question('Максимальный делитель : ').trim().toLowerCase();
  },

  getCorrectAnswer(firstNum, secondNum) {
    if (secondNum > firstNum) return this.getCorrectAnswer(secondNum, firstNum);
    if (secondNum === 0) return firstNum;
    return this.getCorrectAnswer(secondNum, firstNum % secondNum);

  },
}

