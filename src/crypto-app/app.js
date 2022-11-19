import readlineSync from "readline-sync";
import {getRandCountryCode} from "../mocks/mocks.js";
import {getGryptos} from "./api.js";
import {firstCharToUpperCase} from "../games/utils.js";


// function getCountryName (arg) {
// 	if (arg === 'UA') {
// 		return 'Украина';
// 	}
// 	if (arg === 'RU') {
// 		return 'Россия';
// 	}
// 	if (arg === 'KZ') {
// 		return 'Казахстан';
// 	}
// 	if (arg === 'BY') {
// 		return 'Беларусь';
// 	}
// 	return 'неизсвестной нам страны'
// }



/**
 * @param targetObj{Object} целевой (в который клонируем)
 * @param titleObj{Object} - эталонный из которого клонируем
 * @returns {Object} - Возвращает целевой объект
 */
function objClone(targetObj = {}, titleObj) {
	for (let key in titleObj) {
		targetObj[key] = titleObj[key];
	}

	return targetObj;
}



export async function cryptoApp() {
	// Код страны
	const countryCode = getRandCountryCode();

	// Все доступные криптовалюты
	const cryptos = await getGryptos()

	// if (isAuthorize) {
	// 	cryptos.splice(0,cryptos.length / 2)
	// }

	// let previewCryptos = getCryptosPreview(cryptos);
	// let moreCryptos = getMoreCryptos(cryptos);
	// let userCountry = getCountryName(countryCode);


	// Start here

		function User ({name, eMail}) {
		this.name = name;
		this.eMail = eMail;
	}

	function checkIsUserWantDoRegistration () {
		let questionToUser = firstCharToUpperCase(readlineSync.question('Do you want to register?\nAnswer "Yes" or "No". '));
		return questionToUser === 'Yes'? true : console.log(' Sorry, you have canceled your registration.');
	}
	function getUserData () {
		if (checkIsUserWantDoRegistration() === true) {
			let name = readlineSync.question('Write your Name. ')
			let eMail = readlineSync.question('Write your eMail. ')
			return [{name: name, eMail: eMail}] ;
		}
	}

	const createdUserFromUserData = getUserData().map((userData) => new User(userData))
	console.log(createdUserFromUserData)

	// function isAuthorise (createdUserFromUserData) {
	// 	if (createdUserFromUserData) {
	//
	// 	}
	// }
	// isAuthorise(createdUserFromUserData);

	let isAuthorise = false;
	if (!!createdUserFromUserData) isAuthorise = true;



	console.log(Boolean(isAuthorise))




// function getCryptosPreview (arg) {
// 	return arg.slice(0, 3);
// }
//
// function getMoreCryptos (arg) {
// 	return arg.slice(3, 8);
// }
// if (isAuthorize) {
// 	cryptos.splice(0,cryptos.length / 2)
// }


	// // End here
	//
	// // Говорим пользователю из какой он страны
	// console.log(`Привет! Мы определили что ты из ${userCountry}`);
	// // Говорим 3 самые популярные криптовалюты
	// console.log(`Ты можешь посмотреть курсы ${previewCryptos} к EUR и USD`);
	// // Показываем чуть еще 5 криптовалют
	// console.log(`Так-же доступны:  ${moreCryptos}`);
	// // Отображаем пользователю все доступные для него криптовалюты
	// console.log(`Все доступные:  ${cryptos}`);
	}

