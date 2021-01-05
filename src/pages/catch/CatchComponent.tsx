import Bounce from "bounce.js";

export const CatchActionOnClick = (
		event: any,
		exp: number,
    updateExp: (payload: number) => void,
    winStatus: any
	) => {
	const bounce = new Bounce();

	const displayHeight = window.innerHeight;
	const displayWidth = window.innerWidth;
	
	const selectedPoint = {
		x: event.clientX - (displayWidth/2),
		// 40 is a fixed number for normalize y point
		y: (event.clientY + 40) - displayHeight
	};

	const goToSelectedPixle = bounce
		.translate({
			from: { x: 0, y: 0 },
			to: { x: selectedPoint.x, y: selectedPoint.y},
			duration: 600,
			stiffness: 4
		})
		.scale({
			from: { x: 1, y: 1 },
			to: { x: 0.1, y: 2.3 },
			easing: "sway",
			duration: 800,
			delay: 65,
			stiffness: 2
		})
		.scale({
			from: { x: 1, y: 1},
			to: { x: 5, y: 1 },
			easing: "sway",
			duration: 300,
			delay: 30,
		})
		.translate({
			from: { x: 0, y: 0},
			to: { x: selectedPoint.x * -1, y: selectedPoint.y * -1 },
			duration: 10000,
			stiffness: 1
		});
		
	goToSelectedPixle.applyTo(document.getElementById('pokeball') as Element);

	if (event.target.id === 'pokemon') {
		if (exp > 0) {
			updateExp(-100);
		}

		if (exp < 100) {
			winStatus(true);
		}
	} else {
		console.log('Missed!');
	}

	setTimeout(() => {
		goToSelectedPixle.remove();
	}, 1000);
}