import readlineSync from 'readline-sync'
import {firstCharToUpperCase, getRandomNum} from "../utils.js";
import {YES_NO_ANSWER_STRING_VARIANTS} from "./constants.js";

export const isEvenGame = {
	name: '',
	defaultName: 'Anonymous',

	askNameMessage: 'Как тебя зовут? ',

	globalRules: 'Три верных ответа подряд - игра выиграна, один не верный - проиграна.',

	wasUnCorrectAnswer: false,
	correctAnswers: 0,

	winMessage: (name) =>  `Ура ${name}, поздравляю, ты победил`,
	loseMessage: (name) =>  `Очень жаль ${name}, ты проиграл. Запусти игру снова, чтобы попробовать еще раз`,

	//Start - 1
	//greetings - 2
	//initUser - 3
	//sayHello - 4
	//showRules - 5
	//playGame - 6 ( внутри в цикле выполняется метод getCondition/getUserAnswer/getCheckUserAnswerResult)
	//showResultMessage - 7

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
	// Вывод сообщения приветствия в консоле по средствам метода greetings который использует
	// аргументом свойство greetingsMessage.
	// this обращается к значению свойства greetingsMessage.
	// Это могло работать если бы мы к свойствам через внешнюю переменную isEvenGame.greetingsMessage,
	// но если мы перезапишем объект isEvenGame и переназначим greetingsMessage тогда код будет работать не корректно.
	initUser() {
		this.name = firstCharToUpperCase(readlineSync.question(this.askNameMessage)) || this.defaultName;
	},
	// в этом методе запрашиваем имя пользователя посредствам метода .question из библиотеки? readlineSync.
	// по средствам импортированного метода firstCharToUpperCase приводим первую буквы строки в верхний регистр,
	// и с помощью канкатенции прибавляем его к остальным буквам строки имени.
	// оператор "или" использован на случай если значение имени не задано, т.е. = false,  используем дефолтное имя
	// кладем результат в свойство name.
	sayHello() {
		console.log(`Привет ${this.name}`);
	},
	// вывод в консоле либо имя либо дефолтное имя которое положили в свойство name при выполнении прошлого метода.
	showRules() {
		console.log(this.globalRules);
		console.log(this.rules);
	},
	// вывод в сообщений в консоле с правилами игры.

	playGame() {
		while (this.correctAnswers < 3 && !this.wasUnCorrectAnswer) {
			this.playRound()
		}
	},
	// метод возвращает рандомное число в зависимости от аргументов. Аргументы по умолчанию от 0 до 100.
	// метод прописан, в utils.js там же находится переменная которая содержит в себе значение 100 которое используется
	// как аргумент
	getUserAnswer() {
		return readlineSync.question('Четное? ').trim().toLowerCase();
	},

	// если проверка проходит, инициируется инструкция if, которая сравнивает ответ юзера с yes, если условие
	// правдиво, в переменную isCorrect. Соответственно если ответ юзера = "да" возвращается коррект true,
	//  возвращается и ложится в переменную answerCheck и увеличивает счетчик.
	//  в противном случае возвращается фолс и wasUnCorrectAnswer меняется на true. Что приводит к завершению цикла в playGame
	showResultMessage() {
		if (this.wasUnCorrectAnswer) {
			console.log(this.loseMessage(this.name));
			return;
		}
		// если wasUnCorrectAnswer получает значение true, консоль выводит loseMessage, в противном случае консоль выведет winMessage
		console.log(this.winMessage(this.name));
	},

	// region not-repeat
	rules: 'Ответь "Да" если число четное и "Нет" если не четное',
	greetingsMessage: 'Добро пожаловать в игру "Проверка на четное"',
	// в этом методе инициируется цикл while. Код в теле цикла будет исполняться пока условия равны true. Т.е. пока
	// correctAnswers < 3 и нет wasUnCorrectAnswer. В случае если появится значение wasUnCorrectAnswer, в условиях
	// будет хотя бы один false ( в операторе "и" наличие хотя бы одного false значения у аргумента - возвращает false)
	// цикл прервется.
	// wasUnCorrectAnswer написан с оператором отрицания т.к. мы изначально назначили ему false.
	// в теле цикла каждую итерацию инициируется метод playRound()
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
	// создаем переменную condition которая будет получать рандомное число из импортированной функции getRandomNum.
	// выводим в консоль рандомное число.
	// назначаем в переменную userAnswer метод getUserAnswer получает ответ пользователя.
	// назначаем в переменную answerCheck метод который сравнивает ответ пользователя с правильным ответом.
	// инструкция if прибавляет к счетчику correctAnswers единицу в противном случае меняет значение wasUnCorrectAnswer
	// на true.

	getCondition() {
		return getRandomNum()
	},
	// Метод запрашивает ввод данных у пользователя, в ответе убирает пробелы в начале и конце и приводит к нижнему регистру.
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
	// Метод сравнивает проверяет число на четность и сравнивает с ответом пользователя.
	// агрумент condition - рандомное число, второй аргумент ответ юзера.
	// переменная isEven проверяет рандомное число на четность.
	// переменаня isPresetUserAnswerInAnswerVariants содержит массив значени из constant.js, который в свою очередь
	// проверяется на наличие в нем значения userAnswer
	// если значение userAnswer не совпадает с значениями из YES_NO_ANSWER_STRING_VARIANTS, мы возвращаем false
	// в getCheckUserAnswerResult который передает значения в answerCheck и соответственно в playRound выполняется
	// else меняя значение  wasUnCorrectAnswer на true, что приводит к появлению в условии false и заверщению цикла.
	// endregion not-repeat
}
