"use strict"

class OuputView {
	static printRulletReuslt(result) {
		alert(`룰렛 결과 : ${result}번 입니다.\n`)
	}

	static printBettingPrise(money) {
		alert(`배팅 결과 : ${money >= 0 ? `+${money}` : money}`);
	}
}
