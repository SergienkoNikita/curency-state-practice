import readlineSync from 'readline-sync'
import {getRandomNum} from "../utils.js";
import {YES_NO_ANSWER_STRING_VARIANTS} from "./constants.js";

export const isEvenGame = {
	rules: 'Ответь "Да" если число четное и "Нет" если не четное',
	greetingsMessage: 'Добро пожаловать в игру "Проверка на четное"',

	greetings() {
		console.log(this.greetingsMessage);
	},

	showRules() {
			console.log(this.rules);
	},

	getUserAnswer() {
		return readlineSync.question('Четное? ').trim().toLowerCase();
	},

	playRound() {
		const condition = this.getCondition();
		console.log(condition);
		const userAnswer = this.getUserAnswer();
		const rightAnswer = this.getCheckUserAnswerResult(condition, userAnswer);

		return {userAnswer, rightAnswer}
	},

	getCondition() {
		return getRandomNum()
	},
	getCheckUserAnswerResult(condition, userAnswer) {
		const isEven = !(condition % 2);

		let isPresetUserAnswerInAnswerVariants = Object.values(YES_NO_ANSWER_STRING_VARIANTS).includes(userAnswer);

		if (!isPresetUserAnswerInAnswerVariants) return false;

		let isCorrect;

		if (userAnswer === YES_NO_ANSWER_STRING_VARIANTS.YES) {
			isCorrect = isEven;
		}

		if (userAnswer === YES_NO_ANSWER_STRING_VARIANTS.NO) {
			isCorrect = !isEven;
		}

		return isCorrect;
	},

}
