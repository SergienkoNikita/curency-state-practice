import {getRandCountryCode} from "../../mocks/mocks.js";

const COUNTRY_NAMES = Object.freeze({
	'UA': 'Украина',
	'RU': 'Россия',
	'KZ': 'Казахстан',
	'BY': 'Беларусь',
})

const DEFAULT_COUNTRY_NAME = 'неизсвестной нам страны';

export function getUserCountry() {
	const countryCode = getRandCountryCode();
	return COUNTRY_NAMES[countryCode] ?? DEFAULT_COUNTRY_NAME;
}
