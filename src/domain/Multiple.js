"use strict"
const MULTIPLE = {
	x1 : {mutiple : 2, count : 12, color : "#f7a416"},
	x3 : {mutiple : 3, count : 5, color : "#efe61f"},
	x5 : {mutiple : 5, count : 4, color : "#3f297e"},
	x10 : {mutiple : 10, count : 2, color : "#be107f"},
	x20 : {mutiple : 20, count : 1, color : "#e7167b"},
}

function getProducts(obj) {
	return Object.entries(obj).map((val) => {
		let obj = val[1];
		let result = [];
		for (let i=0; i<obj.count; i++){
			result.push(val[0]);
		}
		return result;
	}).flatMap(v => v);
}

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
  }

function getRoulettes(obj) {
	let list = getProducts(obj);
	shuffle(list);
	return list;
}

function getColor(obj, mutiple) {
	return obj[mutiple]["color"];
}


