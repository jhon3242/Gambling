"use strict"
// import { Gamble } from "./domain/Gamble.js";
// import { User } from "./domain/User.js";
// import { InputView } from "./io/InputView.js";

window.onload = function() {
	const GambleController = require("./src/domain/GambleController");
	const User = require("./src/domain/User");
	const InputView = require("./io/InputView");
	const MULTIPLE = require("./src/domain/Const");

	class MainContoller {
		// inputView = new InputView();
		const 
		run() {
			let user = new User("choi", 100_000);
			let gambleController = new GambleController(user);
			while (true) {
				gambleController.start(MULTIPLE.x1, 10000);
			}
		}
	}

	let main = new MainContoller();
	main.run();
	// module.exports = MainContoller;
}

