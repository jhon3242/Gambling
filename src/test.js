"use strict"

let user;

window.onload = function() {
	user = new User("kim", 10000);
	document.getElementById('asset').value = user.getAsset();
}

function getMultiple(){
	// let mutiple = +document.getElementById("MUTIPLE").value;
	// MUTIPLE.
	return +document.getElementById("MUTIPLE").value;
}

function getMoney() {
	return +document.getElementById("MONEY").value;
}

function start() {
	let gambleController = new GambleController(user);
	gambleController.start(getMultiple(), getMoney());
	// alert(user.getAsset());
	document.getElementById('asset').value = user.getAsset();
}