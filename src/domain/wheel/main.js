let theWheel;
let user;

window.onload = function() {
	theWheel = new Winwheel({
        'canvasId'    : 'myCanvas',
        'numSegments' : 24,
        'fillStyle'   : '#eae56f',
        'lineWidth'   : 3,
		'textOrientation' : 'curved',
		'textAligment' : 'outer',
		'outerRadius' : 215,    // Use these three properties to
		'centerX'     : 300,    // correctly position the wheel
		'centerY'     : 301,    // over the background.
		'lineWidth'   : 2,
		'rotationAngle'   : -30, 
		'pointerAngle' : 0,
		'segments'    :
        [
            {'fillStyle' : '#eae56f', 'text' : '1'},
            {'fillStyle' : '#89f26e', 'text' : '3'},
			{'fillStyle' : '#7de6ef', 'text' : '5'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#89f26e', 'text' : '3'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#e7706f', 'text' : '10'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
            {'fillStyle' : '#7de6ef', 'text' : '5'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#89f26e', 'text' : '3'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#89f26e', 'text' : '3'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#7de6ef', 'text' : '5'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#e7706f', 'text' : '10'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#89f26e', 'text' : '3'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#7de6ef', 'text' : '5'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#eae56f', 'text' : '1'},
			{'fillStyle' : '#e7167b', 'text' : '20'}
        ],

		'pointerGuide' :        // Turn pointer guide on.
        {
            'display'     : true,
            'strokeStyle' : 'red',
            'lineWidth'   : 3
        },

		'animation' :                   // Note animation properties passed in constructor parameters.
		{
			'type'     : 'spinToStop',  // Type of animation.
			'duration' : 5,             // How long the animation is to take in seconds.
			'spins'    : 8,              // The number of complete 360 degree rotations the wheel is to do.
			'callbackFinished' : 'afterRolling()',
		}
    });
	user = new User("choi", 10000);
}

// function alertPrize() {
// 	let contorller = new GambleController(user);
// 	let winningSegment = theWheel.getIndicatedSegment();
// 	contorller.start()
// 	alert("You have won " + winningSegment.text + "!");
// }

function afterRolling()
{
	let winningSegment = theWheel.getIndicatedSegment();
	alert(winningSegment.text);
	return winningSegment.text;
}


// let theWheel = new Winwheel({
// 	'canvasId'    : 'myCanvas',
// 	'numSegments' : 12,
// 	'fillStyle'   : '#e7706f',
// 	'lineWidth'   : 3
// });