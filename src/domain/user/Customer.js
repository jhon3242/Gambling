"use strict"

class Customer extends User{
	#asset = 100;

	constructor(name) {
		super(name);
	}

	withdraw(money) {
		if (this.#asset < money) {
			throw new Error("자본이 부족합니다.");
		}
		this.#asset -= money;
		return money;
	}

	deposit(money) {
		this.#asset += money;
	}

	getAsset() {return this.#asset};
}

// module.exports = User;