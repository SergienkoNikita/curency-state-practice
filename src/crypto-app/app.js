import {getGryptos} from "./api.js";
// import {askForRegistration, askUserData} from "./user-module/dialog-with-user.js";
import {DialogWithUser} from "./user-module/dialog-with-user.js"
import {User} from "./user-module/user-model.js";
import {getUserCountry} from "./location/user-location.js";


export async function cryptoApp() {
	const cryptos = await getGryptos();
	Object.keys(cryptos).forEach((cryptoKey) => {
		cryptos[cryptoKey].USD = cryptos[cryptoKey].USD.toFixed(4)
	})
	const wantRegister = DialogWithUser.prototype.askForRegistration();
	const currentUser = wantRegister ? new User(DialogWithUser.prototype.askUserData()) : new User({name: 'Anonymous'});
	const isAuthorise = currentUser.name !== 'Anonymous';
	const cryptosNames = Object.keys(cryptos);

	if (!isAuthorise) {
		cryptosNames.splice(0, cryptosNames.length / 2)
	}

	let previewCryptos = getCryptosPreview(cryptosNames);
	let moreCryptos = getMoreCryptos(cryptosNames);


	function getCryptosPreview(arg) {
		return arg.slice(0, 3);
	}

	function getMoreCryptos(arg) {
		return arg.slice(3, 8);
	}


	console.log(`Привет! Мы определили что ты из ${getUserCountry()}`);
	console.log(`Ты можешь посмотреть курсы ${previewCryptos} к EUR и USD`);
	console.log(`Так-же доступны:  ${moreCryptos}`);
	console.log(`Все доступные:  ${cryptosNames}`);
}

