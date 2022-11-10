import readlineSync from "readline-sync";
import {firstCharToUpperCase, getRandomOperator, getRandomNumber} from "./utils.js"

export const isCalcGame = {

    name: '',
    defaultName: 'Anonymous',

    greetingsMessage: 'Приветствую тебя в игре "Калькулятор"!',
    askNameMessage: 'Напиши свое имя.',
    rules: 'Ты должен правильно решить математическое выражение, ответ напиши в консоль.',

    firstNum: getRandomNumber(),
    secondNum: getRandomNumber(),
    operator: getRandomOperator(),

    winMessage: (name) => `Поздравляю ${name}, ты победил!`,
    loseMessage: (name) => `Очень жаль ${name}, ты проиграл. Запусти игру снова, чтобы попробовать еще раз.`,
    /*
    Приветствовать пользователя
    Запросить ввод имени пользователя
    Вывести его имя
    Вывести правила
    Запросить рандомное число
    Запросить рандомный оператор
    Вывести на экран выражение
    Запросить ответ пользователя
    Отобразить ответ пользователя
    Сравнить его с правильным
    Выдать сообщение показывающее правильный ответ
    Вин\луз сообщение
    */
    start () {
        this.greetings();
        this.initUser();
        this.sayHello();
        this.showRules ();
        this.playGame();
        this.showResultMassage();
    },

    greetings() {
        console.log(this.greetingsMessage);
    },

    initUser () {
        this.name = firstCharToUpperCase(readlineSync.question(this.askNameMessage)) || this.defaultName;
    },

    sayHello() {
        console.log(`Добро пожаловать ${this.name}`);
    },

    showRules() {
        console.log(this.rules);
    },

    playGame: function () {
        const task = this.getTask()
        console.log(`Выражение: ${task}`);

        const userAnswer = this.getUserAnswer();
        const taskResult = this.getCorrectAnswer(task);
        this.getCheckUserAnswerResult(taskResult, userAnswer);
    },

    getTask () {
        return this.firstNum + this.operator + this.secondNum;

    },
    getUserAnswer () {
        return readlineSync.question('Твой ответ ').trim().toLowerCase();
    },

     getCorrectAnswer () {
        let result;
         if (this.operator === ' + ') {
             result = this.firstNum + this.secondNum;
         }
         if (this.operator === ' * ') {
             result = this.firstNum * this.secondNum;
         }
         if (this.operator === ' - ') {
             result = this.firstNum - this.secondNum;
         }
         return result;
     },

    getCheckUserAnswerResult (taskResult, userAnswer) {
        if (taskResult !== Number(userAnswer)) {
            console.log(`Твой ответ :${userAnswer} не верный. Правильный ответ: ${taskResult}`);
        }
        console.log('И это правильный ответ!')
    },

    showResultMassage() {
            if(this.answerCheck) {
                console.log(this.loseMessage(this.name));
            }
        console.log(this.winMessage(this.name));
    },

}