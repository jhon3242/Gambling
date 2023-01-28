let $c;
let ctx;
let product;
let colors;

window.onload = function () {
	$c = document.querySelector("canvas");
	ctx = $c.getContext(`2d`);


	product = getRoulettes(MULTIPLE);


	const newMake = () => {
		const [cw, ch] = [$c.width / 2, $c.height / 2];
		const arc = Math.PI / (product.length / 2);

		for (let i = 0; i < product.length; i++) {
			ctx.beginPath();
			// console.log(product[i] + " " + getColor(MULTIPLE, product[i]));
			ctx.fillStyle = getColor(MULTIPLE, product[i]);
			ctx.moveTo(cw, ch);
			ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
			ctx.fill();
			//
			ctx.fillStyle = "#fff";
			ctx.font = "18px Pretendard";
			ctx.textAlign = "center";
			
			const angle = (arc * i) + (arc / 2);

			ctx.save();

			product[i].split(" ").forEach((text, j) => {
				ctx.fillText(text, 0, 30 * j);
				// console.log("F "  + j);
			});
			
			ctx.translate(
				cw + Math.cos(angle) * (cw - 50),
				ch + Math.sin(angle) * (ch - 50),
			);

			ctx.rotate(angle + Math.PI / 2);

			ctx.restore();
			//

			ctx.closePath();
		}

		ctx.fillStyle = "#fff";
		ctx.font = "18px Pretendard";
		ctx.textAlign = "center";

		// for (let i = 0; i < product.length; i++) {
		// 	const angle = (arc * i) + (arc / 2);

		// 	ctx.save();

		// 	ctx.translate(
		// 		cw + Math.cos(angle) * (cw - 50),
		// 		ch + Math.sin(angle) * (ch - 50),
		// 	);

		// 	ctx.rotate(angle + Math.PI / 2);

		// 	product[i].split(" ").forEach((text, j) => {
		// 		ctx.fillText(text, 0, 30 * j);
		// 		console.log(text);
		// 	});

		// 	ctx.restore();
		// }
	}
	newMake();
}

function rotate(){
	$c.style.transform = `initial`;
	$c.style.transition = `initial`;

	setTimeout(() => {

		const ran = Math.floor(Math.random() * product.length);

		const arc = 360 / product.length;
		const rot = (ran * arc) + 3600 + (arc * 3) - (arc / 4);

		$c.style.transform = `rotate(-${rot}deg)`;
		$c.style.transition = `2s`;

		setTimeout(() => alert(`오늘의 야식은?! ${product[ran]} 어떠신가요?`), 2000);
	}, 1);
};

