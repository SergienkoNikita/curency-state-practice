import readlineSync from "readline-sync";
import {getRandomNum} from "../utils.js"
import {OPERATORS, OPERATION_METHODS} from "./constants.js";

export const isCalcGame = {
	greetingsMessage: 'Приветствую тебя в игре "Калькулятор"!',
	rules: 'Ты должен правильно решить математическое выражение, ответ напиши в консоль.',

	showRules() {
		console.log(this.rules)
	},

	greetings() {
		console.log(this.greetingsMessage);
	},

	playRound() {
		const condition = this.getCondition()
		console.log(`Выражение: ${condition}`);

		const userAnswer = this.getUserAnswer();
		const taskResult = this.getCorrectAnswer(condition);

		return { userAnswer: Number(userAnswer), righAnswer: taskResult }
	},

	getCondition() {
		const firstNum = getRandomNum();
		const secondNum = getRandomNum();
		const operator = OPERATORS[getRandomNum(OPERATORS.length)];

		return `${firstNum} ${operator} ${secondNum}`;
	},

	getCorrectAnswer(condition) {
		const [firstNum, operator, secondNum] = condition.split(' ')

		return OPERATION_METHODS[operator](Number(firstNum), Number(secondNum));
	},

	getUserAnswer() {
		return readlineSync.question('Результат ').trim().toLowerCase();
	},
}
