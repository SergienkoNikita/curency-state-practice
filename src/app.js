import { getRandCountryCode } from "./mocks.js";


export const init = () => {
	const countryCode = getRandCountryCode();

	// Start here
	const cryptos = ['BTC', 'ETH', 'EGLD'];
	// End here

	console.log(`Привет! Мы определили что ты из ${userCountry}`);
	console.log(`Ты можешь посмотреть курсы ${cryptos} к EUR и USD`);
}