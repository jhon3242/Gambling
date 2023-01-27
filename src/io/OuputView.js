"use strict"

class OuputView {
	static printWin() {
		console.log("숫자를 맞췄습니다!");
	}

	static printPrise(money){
		console.log(`획득한 금액 : ${money}`);
	}

	static printAsset(money) {
		console.log(`현재 금액 : ${money}`);
	}

	static printLose() {
		console.log("틀렸습니다...");
	}
}

module.exports = OuputView;