// Constants for the visualisation
const c = 30;
const G = 6;

// Blackhole
let m87;

// Photon particles
const particles = [];

// P5Js Standard Functions
function setup(){

	const wide = windowWidth / 1.5;
	const high = windowHeight / 1.5;

	createCanvas(wide, high);

	// From blackhole.js
	ellipseMode(RADIUS);
	m87 = new BlackHole(wide / 2, height / 2,3000);

	// photon particles creation
	let start = (height / 2) - (m87.rs*2.6);
	let end = (height / 2)
	for(let i = 10; i < end; i = i + 10){ // 10 pixel spacing
		particles.push(new Photon(width - 20, i));
	}
	for(let i = end ; i < (height - 10); i = i + 10){ // 10 pixel spacing
		particles.push(new Photon(width - 20, i));
	}

}

function draw(){

	background(255);

	// From blackhole.js
	m87.show();

	// From photon.js
	for(let p of particles){
		
		m87.pull(p);

		p.update();
		p.show(255,0,0);
	}
}