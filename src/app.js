import { getRandCountryCode } from "./mocks.js";


export const init = () => {
	const countryCode = getRandCountryCode();

	// Start here

	//let userCountry = 'RU';
	//const ua = 'UA';
	//const ru = 'RU';
	//const kz = 'KZ';
	//const by = 'BY';

	const cryptos = ['BTC', 'ETH', 'EGLD'];
	let userCountry = ['UA', 'RU', 'KZ', 'BY'];

	switch (countryCode) {
		case 'UA':
			userCountry = 'Украина';
			break;
		case 'RU':
			userCountry =  'Россия';
			break;
		case 'KZ':
			userCountry =  'Казахстан';
			break;
		case 'BY':
			userCountry =  'Беларусь';
			break;
		default:
			userCountry =  'неизсвестной нам страны!';

	}
	// End here


	console.log(`Привет! Мы определили что ты из ${userCountry}`);
	console.log(`Ты можешь посмотреть курсы ${cryptos} к EUR и USD`);
}