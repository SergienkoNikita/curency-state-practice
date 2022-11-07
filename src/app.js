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

	// задача 1

	let num = 34;
	function getCalcRemainder (num) {
		function remainderBy (num) {
			let remeind = (num % 5 );
			return remeind;
		}
		return remainderBy(num)
	}

	console.log(getCalcRemainder(num));

	// Задача 2
	const arrayBubble = [3, 2, 5, 6, 4, 1, 8, 9, 7];

	function bubbleSort (arr) {
		for (let a = 0; a < arr.length; a += 1) {
			for (let i = 0; i < arr.length; i += 1) {
				if (arr[i] > arr[i + 1]) {
					let tempArray = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = tempArray;
				}
			}
		}
		return arr;
	}
	console.log(bubbleSort(arrayBubble));

	// задача 3
	let cloneAddress = {};
	let address = {
		district : {
			good: 'south',
			normal: 'center',
			bad: 'north',
		},
		street : {
			'1st' : '1',
			'2th' : '2',
			'3th' : '3',
		}
	}
	function objCloneDeep (donor, recipient) {
		for (let key in donor) {
			recipient[key] = donor[key];
		}
		return recipient;
	}

	console.log(objCloneDeep(address, cloneAddress));

	// задача 4
	let base = {
		name: 'Alexandr',
		surname: 'Nevski',
		thirdname: 'Yaroslavovich',
	}

	let base2 = {
		name: 'Viktor',
		thirdname : 'Yakovlevich',
	}
	let base3 = {
		name: 'Alexandr',
		surname : 'Zverev',
		fullName: 'Alexandr Zverev Vitalievich',
	}

	function sayFullName (someObj) {
		if (someObj.fullName === undefined) {
			someObj.fullName = `${someObj.name} ${someObj.surname} ${someObj.thirdname}`;
		}
	}

	sayFullName(base3);
	console.log(base3);

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

