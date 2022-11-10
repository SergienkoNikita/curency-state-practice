import readlineSync from "readline-sync";
import {firstCharToUpperCase, getRandomNum} from "../utils.js"
import {OPERATORS, OPERATION_METHODS} from "./constants.js";

export const isCalcGame = {
	name: '',
	defaultName: 'Anonymous',

	greetingsMessage: 'Приветствую тебя в игре "Калькулятор"!',
	askNameMessage: 'Напиши свое имя: ',
	rules: 'Ты должен правильно решить математическое выражение, ответ напиши в консоль.',

	wasUnCorrectAnswer: false,
	correctAnswers: 0,

	winMessage: (name) => `Поздравляю ${name}, ты победил!`,
	loseMessage: (name) => `Очень жаль ${name}, ты проиграл. Запусти игру снова, чтобы попробовать еще раз.`,

	start() {
		this.greetings();
		this.initUser();
		this.sayHello();
		this.showRules();
		this.playGame();
		this.showResultMessage();
	},

	greetings() {
		console.log(this.greetingsMessage);
	},

	initUser() {
		this.name = firstCharToUpperCase(readlineSync.question(this.askNameMessage)) || this.defaultName;
	},

	sayHello() {
		console.log(`Добро пожаловать ${this.name}`);
	},

	showRules() {
		console.log(this.rules);
	},

	playGame() {
		while (this.correctAnswers < 3 && !this.wasUnCorrectAnswer) {
			this.playRound()
		}
	},

	playRound() {
		const condition = this.getCondition()
		console.log(`Выражение: ${condition}`);

		const userAnswer = this.getUserAnswer();
		const taskResult = this.getCorrectAnswer(condition);
		const isAnswerCorrect = this.getCheckUserAnswerResult(taskResult, userAnswer);


		if (!isAnswerCorrect) {
			console.log(`Твой ответ: ${userAnswer} не верный. Правильный ответ: ${taskResult}`);
			this.wasUnCorrectAnswer = true;
		} else {
			console.log('И это правильный ответ!');
			this.correctAnswers += 1;
		}
	},

	getCondition() {
		const firstNum = getRandomNum();
		const secondNum = getRandomNum();
		const operator = OPERATORS[getRandomNum(OPERATORS.length)];

		return `${firstNum} ${operator} ${secondNum}`;
	},

	getUserAnswer() {
		return readlineSync.question('Твой ответ ').trim().toLowerCase();
	},

	getCorrectAnswer(condition) {
		const [firstNum, operator, secondNum] = condition.split(' ')

		return OPERATION_METHODS[operator](Number(firstNum), Number(secondNum));
	},

	getCheckUserAnswerResult(taskResult, userAnswer) {
		return taskResult === Number(userAnswer)
	},

	showResultMessage() {
		if (this.wasUnCorrectAnswer) {
			console.log(this.loseMessage(this.name));
			return;
		}
		// если wasUnCorrectAnswer получает значение true, консоль выводит loseMessage, в противном случае консоль выведет winMessage
		console.log(this.winMessage(this.name));
	}
}
