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
		const rightAnswer = this.getCorrectAnswer(condition);

		return {userAnswer, rightAnswer}
	},

	getCondition() {
		return getRandomNum()
	},

	getCorrectAnswer(condition) {
		const isEven = !(condition % 2);

		return isEven ? YES_NO_ANSWER_STRING_VARIANTS.YES : YES_NO_ANSWER_STRING_VARIANTS.NO;
	},
}
