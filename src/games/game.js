import {firstCharToUpperCase} from "./utils.js";
import readlineSync from "readline-sync";

export const gameController = {
	name: '',
	defaultName: 'Anonymous',

	askNameMessage: 'Напиши свое имя: ',

	wasUnCorrectAnswer: false,
	correctAnswers: 0,
	globalRules: 'Три верных ответа подряд - игра выиграна, один не верный - проиграна.',

	winMessage: (name) => `Поздравляю ${name}, ты победил!`,
	loseMessage: (name) => `Очень жаль ${name}, ты проиграл. Запусти игру снова, чтобы попробовать еще раз.`,

	start(gameType) {
		gameType.greetings()
		this.initUser();
		this.sayHello();
		this.showRules(gameType);
		this.playGame(gameType);
		this.showResultMessage();
	},

	initUser() {
		this.name = firstCharToUpperCase(readlineSync.question(this.askNameMessage)) || this.defaultName;
	},

	sayHello() {
		console.log(`Добро пожаловать ${this.name}`);
	},

	showRules(gameType) {
		console.log(this.globalRules);
		gameType.showRules()
	},

	playGame(gameType) {
		while (this.correctAnswers < 3 && !this.wasUnCorrectAnswer) {
			this.handleRoundResult(gameType.playRound())
		}
	},

	handleRoundResult({rightAnswer, userAnswer}) {
		if (rightAnswer === userAnswer) {
			this.correctAnswers += 1;
			console.log('И это правильный ответ!');
		} else {
			this.wasUnCorrectAnswer = true
			console.log(`Твой ответ: ${userAnswer} не верный. Правильный ответ: ${rightAnswer}`);
		}
	},


	showResultMessage() {
		if (this.wasUnCorrectAnswer) {
			console.log(this.loseMessage(this.name));
			return;
		}
		console.log(this.winMessage(this.name));
	},
}
