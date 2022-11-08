import readlineSync from 'readline-sync'
import {firstCharToUpperCase, getRandomNum} from "./utils.js";
import {YES_NO_ANSWER_STRING_VARIANTS} from "./constants.js";

export const isEvenGame = {
	name: '',

	greetingsMessage: 'Добро пожаловать в игру "Проверка на четное"',
	askNameMessage: 'Как тебя зовут? ',
	defaultName: 'Anonimus',
	globalRules: 'Три верных ответа подряд - игра выиграна, один не верный - проиграна.',
	rules: 'Ответь "Да" если число четное и "Нет" если не четное',
	winMessage: (name) =>  `Ура ${name}, поздравляю, ты победил`,
	loseMessage: (name) =>  `Очень жаль ${name}, ты проиграл. Запусти игру снова, чтобы попробовать еще раз`,

	wasUnCorrectAnswer: false,
	correctAnswers: 0,


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
		console.log(`Привет ${this.name}`);
	},

	showRules() {
		console.log(this.globalRules);
		console.log(this.rules);
	},

	playGame() {
		while (this.correctAnswers < 3 && !this.wasUnCorrectAnswer) {
			this.playRound()
		}
	},

	playRound() {
		const condition = this.getCondition();
		console.log(condition);
		const userAnswer = this.getUserAnswer();
		const answerCheck = this.getCheckUserAnswerResult(condition, userAnswer);

		if (answerCheck) {
			this.correctAnswers += 1;
		} else {
			this.wasUnCorrectAnswer = true;
		}
	},

	getCondition() {
		return getRandomNum()
	},

	getUserAnswer() {
		return readlineSync.question('Четное? ').trim().toLowerCase();
	},

	getCheckUserAnswerResult(condition, userAnswer) {
		const isEven = !(condition % 2); // Четное или нечетное

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

	showResultMessage() {
		if (this.wasUnCorrectAnswer) {
			console.log(this.loseMessage(this.name));
			return;
		}

		console.log(this.winMessage(this.name));
	}
}
