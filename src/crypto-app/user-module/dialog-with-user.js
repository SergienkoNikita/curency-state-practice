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

export class DialogWithUser {

	constructor() {
	}

	askForRegistration () {
		const userAnswer = readlineSync.question('Do you want to register?\nAnswer "Yes" or "No". ').toLowerCase();

		if (!Object.values(YES_NO_ANSWER_STRING_VARIANTS).includes(userAnswer)) {
			console.log('Your answer must be "Yes" or "No" \nTry again!');
			return this.askForRegistration();
		}
		if (userAnswer !== YES_NO_ANSWER_STRING_VARIANTS.YES) console.log('You have canceled your registration.');

		return userAnswer === YES_NO_ANSWER_STRING_VARIANTS.YES
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