"use strict"

// const Gamble = require("./Gamble");
// const OutputView = require("../io/OuputView");
let contorller;

window.onload = function() {
	initWheel();
	let user = new User("choi", 100);
	contorller = new GambleController(user);
	document.getElementById("asset").innerText =contorller.getAsset();
}

function afterRolling() {
	let result = getRollingResult();
	let total = 0;
	alert(`룰렛 결과 : ${result}번 입니다.\n`);
	total += contorller.start(MULTIPLE.x1, document.getElementById("x1B").value, result);
	total += contorller.start(MULTIPLE.x3, document.getElementById("x3B").value, result);
	total += contorller.start(MULTIPLE.x5, document.getElementById("x5B").value, result);
	total += contorller.start(MULTIPLE.x10, document.getElementById("x10B").value, result);
	total += contorller.start(MULTIPLE.x20, document.getElementById("x20B").value, result);
	alert(`배팅 결과 : ${total >= 0 ? `+${total}` : total}`);
	document.getElementById("asset").innerText =contorller.getAsset();
}

function resetRolling() {
	theWheel.rotationAngle=0; 
	theWheel.draw();
	document.getElementById("bigButton").disabled = false;
	document.getElementById("x1B").value = null;
	document.getElementById("x3B").value = null;
	document.getElementById("x5B").value = null;
	document.getElementById("x10B").value = null;
	document.getElementById("x20B").value = null;
}

class GambleController {
	
	constructor(user) {this._user = user};

	start(pick, money, result) {
		if (money === "")
			return 0;
		money = +money;
		try {
			this._user.withdraw(money);
		} catch (err){
			alert(err);
			return ;
		}
		result = getMutipleByKey("x" + result);
		if (pick.multiple == result) {
			this._user.deposit(money * result);
			return money * result;
		}
		return -money;
	}

	getAsset() {
		return this._user.getAsset();
	}
}
