import readlineSync from "readline-sync";

import {YES_NO_ANSWER_STRING_VARIANTS} from "../../games/is-even-game/constants.js";

// export function askForRegistration() {
// 	const userAnswer = readlineSync.question('Do you want to register?\nAnswer "Yes" or "No". ').toLowerCase();
//
// 	if (!Object.values(YES_NO_ANSWER_STRING_VARIANTS).includes(userAnswer)) {
// 		console.log('Your answer must be "Yes" or "No" \nTry again!');
// 		return askForRegistration();
// 	}
//
// 	if (userAnswer !== YES_NO_ANSWER_STRING_VARIANTS.YES) console.log('You have canceled your registration.');
//
// 	return userAnswer === YES_NO_ANSWER_STRING_VARIANTS.YES
// }
//
// export function askUserData () {
// 	const userData = {
// 		name: readlineSync.question('Write your name: '),
// 	}
//
// 	if (!userData.name) {
// 		console.log('"Name" must be required!');
// 		return askUserData();
// 	}
//
// 	return {
// 		...userData,
// 		email: readlineSync.question('Write your email: '),
// 	}
// }

class DialogWithUser {
	#registerQuestionMessage;

	#wrongAnswerMessage;

	#cancelRegistrationMessage;

	constructor() {
		this.#registerQuestionMessage = 'Do you want to register?\nAnswer "Yes" or "No". ';
		this.#wrongAnswerMessage = 'Your answer must be "Yes" or "No" \nTry again!';
		this.#cancelRegistrationMessage = 'You have canceled your registration.';
	}

	#validateYesNoAnswer(userAnswer) {
		const validationResult = Object.values(YES_NO_ANSWER_STRING_VARIANTS).includes(userAnswer)

		if (!validationResult) console.log(this.#wrongAnswerMessage)

		return validationResult;
	}

	wantUserRegister() {
		const userAnswer = readlineSync.question(this.#registerQuestionMessage).toLowerCase();

		if (!this.#validateYesNoAnswer(userAnswer)) this.wantUserRegister();

		const isWant = userAnswer === YES_NO_ANSWER_STRING_VARIANTS.YES;

		if (!isWant) console.log(this.#cancelRegistrationMessage);

		return isWant;
	}

	askUserData () {
		const userData = {
			name: readlineSync.question('Write your name: '),
		}

		if (!userData.name) {
			console.log('"Name" must be required!');
			return this.askUserData();
		}

		return {
			...userData,
			email: readlineSync.question('Write your email: '),
		}
	}
}

export const dialog = new DialogWithUser()
