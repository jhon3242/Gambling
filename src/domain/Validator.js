
class Validator {
	static #validateNum(value) {
		if (!isFinite(value)) throw new Error("숫자가 아닙니다.");
	}

	static validateMoney(value) {
		this.#validateNum(value);
		if (value < 0) throw new Error("돈은 음수가 될 수 없습니다.");
	}
}