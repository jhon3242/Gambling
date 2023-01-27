"use strict"

class User {
	constructor(name, asset) {
		this._name = name;
		this._asset = asset;
	}

	withdraw(money) {
		if (this._asset < money) {
			throw new Error("자본이 부족합니다.");
		}
		this._asset -= money;
		return money;
	}

	deposit(money) {
		this._asset += money;
	}

	getAsset() {return this._asset};
}

module.exports = User;