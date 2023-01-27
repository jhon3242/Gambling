"use strict"

const Gamble = require("./Gamble");
const OutputView = require("../io/OuputView");

class GambleController {
	
	constructor(user) {this._user = user};

	start(pick, money) {
		const result = new Gamble().rolling();
		this._user.withdraw(money);
		if (pick === result) {
			this._user.deposit(money * result);
			console.log(`입금 ${money * result} 현재 ${this._user.getAsset()}`);
			OutputView.printWin();
			OutputView.printAsset(this._user.getAsset());
			return ;
		}
		OutputView.printLose();
		OutputView.printAsset(this._user.getAsset());
	}
}

module.exports = GambleController;