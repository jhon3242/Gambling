"use strict"

const readline = require('readline');
// const { GuideMsg } = require("../static/static");
// const InputValidator = require("../utils/InputValidator");

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })

// let log;

// rl.on('line', (line) => {
// 	// 입력 받은 값을 처리하는 코드 //
// 	log = line;
// 	rl.close();
// });

// rl.on('close', () => {
// // 입력이 끝나고 실행하는 코드 //
// 	console.log(log);
// 	process.exit();
// });


class InputView {

	constructor() {
		this.rl = readline.createInterface({
			input : process.stdin,
			output : process.stdout,
		})
		this.input;
	}
	
	inputStr() {
		this.rl.on("line", (line) => {
			this.input = line;
		});

		this.rl.on('close', () => {
			process.exit();
		})
		return this.input;
	}
}


// module.exports = InputView;