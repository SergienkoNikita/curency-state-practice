import { getCryptos, getRandCountryCode } from "./mocks.js";
function getCountryName (arg) {
	if (arg === 'UA') {
		return 'Украина';
	}
	if (arg === 'RU') {
		return 'Россия';
	}
	if (arg === 'KZ') {
		return 'Казахстан';
	}
	if (arg === 'BY') {
		return 'Беларусь';
	}
	return 'неизсвестной нам страны'
}
// Задача 2
function getCryptosPreview (arg) {
	let previewCryptos = arg.slice(0, 3);
	return previewCryptos;
}

function getMoreCryptos (arg) {
	let moreCryptos = arg.slice(3, 8);
	return moreCryptos;
}


export const init = () => {
	// Код страны
	const countryCode = getRandCountryCode();
	// Авторизован ли пользователь
	const isAuthorize = !!Math.floor(Math.random() * 2);
	// Все доступные криптовалюты
	const cryptos = [...getCryptos()];

	if (!isAuthorize) {
		cryptos.splice(0,cryptos.length / 2)
	}

	/*
        let previewCryptos = cryptos.slice(0, 3);
        let moreCryptos = cryptos.slice(3, 8);
    */

	// Start here

	//задача 2
	let previewCryptos = getCryptosPreview(cryptos);
	let moreCryptos = getMoreCryptos(cryptos);


	/* задача 3

	function getCalcRemainder (num) {
		let remind = (num % 2 );
		return remind;
	}

	console.log(getCalcRemainder(12));

	простой вариант, далее по более*/


	function getCalcRemainderAnother (num, divisor) {
		let remind = (num % divisor || num % 2);
		return remind;
	}

	console.log(getCalcRemainderAnother(51, 3));

	const arrayArray = ['cfb', 'kvnr', 'udsn'];
	function getArrayOfArrays (argArray) {
		const newArray = [];
		for ( let i = 0; i < argArray.length; i += 1) {
			let tempArray = [];
			tempArray.push(argArray[i].split(''));
			newArray.push(tempArray);

		}
		return newArray;
	}
	console.log(getArrayOfArrays(arrayArray));


	let userCountry = getCountryName(countryCode);
	// End here

	// Говорим пользователю из какой он страны
	console.log(`Привет! Мы определили что ты из ${userCountry}`);
	// Говорим 3 самые популярные криптовалюты
	console.log(`Ты можешь посмотреть курсы ${previewCryptos} к EUR и USD`);
	// Показываем чуть еще 5 криптовалют
	console.log(`Так-же доступны:  ${moreCryptos}`);
	// Отображаем пользователю все доступные для него криптовалюты
	console.log(`Все доступные:  ${cryptos}`);
}

