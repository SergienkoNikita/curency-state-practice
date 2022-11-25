import {firstCharToUpperCase} from "../../games/utils.js";

export class User {
	#name;

	#surname;

	email;

	static defaultUserName() {
		return 'Anonymous'
	};

	constructor(userData) {
		this.init(userData);
	}

	init({name, email = '', surname = ''}) {
		this.#name = name.toLowerCase();
		this.#surname = surname.toLowerCase();
		this.email = email.toLowerCase();
	}

	get name() {
		return firstCharToUpperCase(this.#name);
	}

	set name(value) {
		this.#name = value.toLowerCase();
	}
}

class Client extends User {
	#name;
	#surname;
	email;

	constructor(userData) {
		super(userData);
	}

	get fullName () {
		return `${firstCharToUpperCase(this.#name)} ${firstCharToUpperCase(this.#surname)}`
	}
}

