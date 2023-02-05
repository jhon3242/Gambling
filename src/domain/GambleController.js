"use strict"


// const Gamble = require("./Gamble");
// const OutputView = require("../io/OuputView");
let contorller;

window.onload = function() {
	initWheel();
	let user = new Customer("choi");
	contorller = new GambleController(user);
	document.getElementById("asset").innerText =contorller.getAsset();
}


function afterRolling() {
	let result = +getRollingResult();
	let total = 0;
	OuputView.printRulletReuslt(result);
	total += contorller.start(MULTIPLE.x1, +document.getElementById("x1B").value, result);
	total += contorller.start(MULTIPLE.x3, +document.getElementById("x3B").value, result);
	total += contorller.start(MULTIPLE.x5, +document.getElementById("x5B").value, result);
	total += contorller.start(MULTIPLE.x10, +document.getElementById("x10B").value, result);
	total += contorller.start(MULTIPLE.x20, +document.getElementById("x20B").value, result);
	OuputView.printBettingPrise(total);
	document.getElementById("asset").innerText =contorller.getAsset();
	resetRolling();
}

function resetRolling() {
	theWheel.rotationAngle=0; 
	theWheel.draw();
	document.getElementById("x1B").value = null;
	document.getElementById("x3B").value = null;
	document.getElementById("x5B").value = null;
	document.getElementById("x10B").value = null;
	document.getElementById("x20B").value = null;
}

class GambleController {
	getAsset() {
		return this._user.getAsset();
	}
	
	constructor(user) {this._user = user};

	start(pick, money, result) {
		Validator.validateMoney(money);
		this.#withdrawMoney(money);
		result = getMutipleByKey("x" + result);
		if (pick.multiple === result) {
			this._user.deposit(money * result);
			return money * result;
		}
		return -money;
	}

	#withdrawMoney(money){
		if (this.getAsset() < money) throw new Error("돈이 충분하지 않습니다.");
		this._user.withdraw(money);
	}
}
