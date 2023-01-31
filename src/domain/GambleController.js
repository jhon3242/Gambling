"use strict"

// const Gamble = require("./Gamble");
// const OutputView = require("../io/OuputView");

class GambleController {
	
	constructor(user) {this._user = user};

	start(pick, money) {
		try {
			this._user.withdraw(money);
		} catch (err){
			alert(err);
			return ;
		}
		
		const result = new Gamble().rolling();
		let msg = `룰렛 결과 : ${result}번 입니다.\n`;
		
		if (pick === result) {
			this._user.deposit(money * result);
			msg += "맞췄습니다!"
			alert(msg);
			return ;
		}
		msg += "틀렸습니다.!"
		alert(msg);
	}
}
