import readlineSync from 'readline-sync';
import { getRandomNum } from '../utils.js';
import { YES_NO_ANSWER_STRING_VARIANTS } from '../is-even-game/constants.js';

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
    const condition = this.getCondition();
    console.log(`Число: ${condition}`);
    const userAnswer = this.getUserAnswer();
    const rightAnswer = this.getCorrectAnswer(condition);

    return { userAnswer, rightAnswer };
  },

  getCondition() {
    return getRandomNum();
  },

  getUserAnswer() {
    return readlineSync.question('Твой ответ: ').trim().toLowerCase();
  },

  isPrime(num) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  },

  getCorrectAnswer(condition) {
    return this.isPrime(condition)
      ? YES_NO_ANSWER_STRING_VARIANTS.YES
      : YES_NO_ANSWER_STRING_VARIANTS.NO;
  },
};
