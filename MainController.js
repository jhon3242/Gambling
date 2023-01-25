"use strict"
// import { Gamble } from "./domain/Gamble.js";
// import { User } from "./domain/User.js";
// import { InputView } from "./io/InputView.js";

const GambleController = require("./domain/GambleController");
const User = require("./domain/User");
const InputView = require("./io/InputView");
const MULTIPLE = require("./domain/Const");

class MainContoller {
	// inputView = new InputView();

	run() {
		let user = new User("choi", 100_000);
		let gambleController = new GambleController(user);
		while (true) {
			gambleController.start(MULTIPLE.x1, 10000);
		}
	}
}

module.exports = MainContoller;