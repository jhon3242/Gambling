"use strict"
const MULTIPLE = {
	x1 : {mutiple : 2, count : 12, color : "#efe61f"},
	x3 : {mutiple : 3, count : 5, color : "#f7a416"},
	x5 : {mutiple : 5, count : 4, color : "#3f297e"},
	x10 : {mutiple : 10, count : 2, color : "#be107f"},
	x20 : {mutiple : 20, count : 1, color : "#e7167b"},
}

function getProducts(obj) {
	return Object.keys(obj).map(key => {
		let tmp = [];
		for (let i=0; i<MULTIPLE[key].count; i++) {
			tmp.push(key);
		}
		return tmp;
	}).flatMap(val => val);
}

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

function getColors(products){
	let result = [];
	for (let val of products){
		result.push(MULTIPLE[val].color);
	}
	return result;
}

function getRoulettes(obj) {
	let products = getProducts(obj);
	shuffle(products);
	let colors = getColors(products);
	return [products, colors];
}

function getColor(obj, mutiple) {
	return obj[mutiple]["color"];
}

