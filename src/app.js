import {getCryptos, getRandCountryCode} from "./mocks.js";

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
	return arg.slice(0, 3);
}

function getMoreCryptos (arg) {
	return arg.slice(3, 8);
}


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

	let previewCryptos = getCryptosPreview(cryptos);
	let moreCryptos = getMoreCryptos(cryptos);
	let userCountry = getCountryName(countryCode);

	// Start here




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

