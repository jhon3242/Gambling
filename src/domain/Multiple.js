"use strict"
const MULTIPLE = {
	x1 : {multiple : 2, count : 12, color : "#efe61f"},
	x3 : {multiple : 3, count : 5, color : "#f7a416"},
	x5 : {multiple : 5, count : 4, color : "#3f297e"},
	x10 : {multiple : 10, count : 2, color : "#be107f"},
	x20 : {multiple : 20, count : 1, color : "#e7167b"},
}

function getMutipleByKey(key) {
	return MULTIPLE[key].multiple;
}
