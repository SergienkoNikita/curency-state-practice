import readlineSync from "readline-sync";
import {getRandomNum} from "../utils.js";
import {YES_NO_ANSWER_STRING_VARIANTS} from "../is-even-game/constants.js";

export const isSimpleNumberGame = {

  greetingsMessage: 'Добро пожаловать в игру "Простое число" ',
  rules: 'Если число простое - отвечай "да", если нет - отвечай "нет" ',

  greetings() {
    console.log(this.greetingsMessage);
  },

  showRules() {
    console.log(this.rules);
  },

  playRound() {
    const condition = this.getCondition()
    console.log(`Число: ${condition}`);
    const userAnswer = this.getUserAnswer();
    console.log(`Твой ответ: ${userAnswer}`);
    const getAnswer = this.getAnswer(condition);
    const rightAnswer = this.getCorrectAnswer(getAnswer, userAnswer);

    return {userAnswer, rightAnswer}
  },

  getCondition() {
    return getRandomNum()
  },

  getUserAnswer() {
    return readlineSync.question('Твой ответ: ').trim().toLowerCase();
  },

  getAnswer(condition) {
    for (let i = 2; i < condition; i += 1) {
      if (condition % i === 0) return false;
    }
    return condition > 1;
  },

  getCorrectAnswer(getAnswer, userAnswer) {
    let isCorrect;
    if (getAnswer === false && userAnswer === YES_NO_ANSWER_STRING_VARIANTS.NO) {
       isCorrect = YES_NO_ANSWER_STRING_VARIANTS.NO;
      }
    if (getAnswer === true && userAnswer === YES_NO_ANSWER_STRING_VARIANTS.YES) {
       isCorrect = YES_NO_ANSWER_STRING_VARIANTS.YES;
    }
    if (getAnswer === true && userAnswer === YES_NO_ANSWER_STRING_VARIANTS.NO) {
      isCorrect = YES_NO_ANSWER_STRING_VARIANTS.YES;
    }
    if (getAnswer === false && userAnswer === YES_NO_ANSWER_STRING_VARIANTS.YES) {
      isCorrect = YES_NO_ANSWER_STRING_VARIANTS.NO;
    }
    return isCorrect;
    },
}
