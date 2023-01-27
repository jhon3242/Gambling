"use strict"

// import * as Util from "./Util.js"
// import { MULTIPLE } from "./Const.js";
// const Util = require("./Util");
// const MULTIPLE = require("./Const");

class Gamble {

	constructor() {}

	/**
	 * 돌림판을 돌리는 기능
	 */
	rolling() {
		let picked = getRandomInt(0, 24);
		// console.log("picked : " + picked);
		if (picked == 0)
			return MULTIPLE.x20;
		if (picked <= 2)
			return MULTIPLE.x10;
		if (picked <= 6)
			return MULTIPLE.x5;
		if (picked <= 12)
			return MULTIPLE.x3;
		return MULTIPLE.x1;
	}
}

// module.exports = Gamble;