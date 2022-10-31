import { getCryptos, getRandCountryCode } from "./mocks.js";


export const init = () => {
	// Код страны
	const countryCode = getRandCountryCode();
	//Авторизован ли пользователь
	const isAuthorize = !!Math.floor(Math.random() * 2);
	//Все доступные криптовалюты
	const cryptos = [...getCryptos()];

	// Start here
	let userCountry = 'неизсвестной нам страны!';
	let previewCryptos = cryptos.slice(0,3);
	let moreCryptos = cryptos.slice(3,8);

	if (countryCode === 'UA') {
		userCountry = 'Украина';
	} else if (countryCode === 'RU') {
		userCountry = 'Россия';
	} else if (countryCode === 'KZ') {
		userCountry = 'Казахстан';
	} else if (countryCode === 'BY') {
		userCountry = 'Беларусь';
	}

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

