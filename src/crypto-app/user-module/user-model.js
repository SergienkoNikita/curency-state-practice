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

	get fullName () {
		return `${firstCharToUpperCase(this.#name)} ${firstCharToUpperCase(this.#surname)}`
	}
}

class AdminUser extends User {
	mumName;
	constructor(userData) {
		super(userData);
	}

	init({name, email = '', surname = ''}) {
		super.init({name, email, surname});
		this.isAdmin = true;
	}
}


const user = new AdminUser({name: 'Anton'});
console.log(user)



