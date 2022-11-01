import { getCryptos, getRandCountryCode } from "./mocks.js";


export const init = () => {
	// Код страны
	const countryCode = getRandCountryCode();
	// Авторизован ли пользователь
	const isAuthorize = !!Math.floor(Math.random() * 2);
	// Все доступные криптовалюты
	const cryptos = [...getCryptos()];

	let userCountry = 'неизсвестной нам страны!';


	if (countryCode === 'UA') {
		userCountry = 'Украина';
	}

	if (countryCode === 'RU') {
		userCountry = 'Россия';
	}

	if (countryCode === 'KZ') {
		userCountry = 'Казахстан';
	}

	if (countryCode === 'BY') {
		userCountry = 'Беларусь';
	}

	if (!isAuthorize) {
		cryptos.splice(0,cryptos.length / 2)
	}

	let previewCryptos = cryptos.slice(0, 3);
	let moreCryptos = cryptos.slice(3, 8);


	// Start here

	const getRandomNum = () => Math.floor(Math.random() * 100) // Рандомное число от 0 до 100

	const randString = Math.random().toString(2)

	let num = 0;

	while (num < 20) {
		if (num % 2) {
		 console.log(`${num} не четное`);
		} else {
			num
			console.log(`${num} четное`);
		}
		num += 1;
	}

	let attempt = 1;
	while (getRandomNum() !== 50) {
		console.log(attempt);
		attempt += 1;
	}

	let withoutDot	= randString.split('.').join('').split('');
	let unitSum = 0;
	for (let count = 0; count < randString.length; count += 1 ) {
		if (withoutDot[count] === '1') {
			unitSum += 1;
		}
	}

	console.log(`количество единиц = ${unitSum}`);

	// Переписать на while

	// for (let num = 0; num < 20; num += 1) {
	// 	if (!num % 2) {
	// 		console.log(`${num} четное`)
	// 	} else {
	// 		console.log(`${num} не четное`)
	// 	}
	// }

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

