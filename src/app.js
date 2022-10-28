import { getRandCountryCode } from "./mocks.js";


export const init = () => {
	const countryCode = getRandCountryCode();

	// Start here
	const cryptos = ['BTC', 'ETH', 'EGLD'];

	switch (countryCode) {
		case 'UA':
			alert('Украина');
			break;
		case 'RU':
			alert('Россия');
			break;
		case 'KZ':
			alert('Казахстан');
			break;
		case 'BY':
			alert('Беларусь');
			break;
		default:
			alert('Страна не верна!');
			alert('Введите одну из следующих стран: UA, RU, KZ, BY.');
	}
	// End here


	console.log(`Привет! Мы определили что ты из ${userCountry}`);
	console.log(`Ты можешь посмотреть курсы ${cryptos} к EUR и USD`);
}