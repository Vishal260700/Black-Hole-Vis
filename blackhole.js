// BlackHole Classes
class BlackHole{
	// parameters of x,y and mass passed from index.js
	constructor(x,y,m){
		this.pos = createVector(x,y);
		this.mass = m;
		this.rs = (2 * G * this.mass) / (c*c);
	}

	pull(photon) {
		const force = p5.Vector.sub(this.pos, photon.pos);
		const r = force.mag();
		const fg = G * this.mass / (r * r);

		// decreasing force and magnitude for 40 FPs by a factor of 0.1
		force.setMag(fg * 0.4);
		photon.vel.add(force);
		photon.vel.setMag(c * 0.4);

		if(r < this.rs){
			photon.stop();
			photon.set(0,0,0);
		}

	}

	// Standard P5Js 2D Circle Drawing
	show(){

		// blackhole core (Event Horizon)
		fill(0);
		noStroke();
		circle(this.pos.x, this.pos.y, this.rs);

		// Photon Disk
		noFill();
		stroke(255, 155, 0);
		strokeWeight(16);
		circle(this.pos.x, this.pos.y, this.rs*1.5 + 16); // Adding 16 equal to the stroke value

		// Accertion disk
		noFill();
		stroke(100, 100);
		strokeWeight(32);
		circle(this.pos.x, this.pos.y, this.rs*3 + 32); // Adding 16 equal to the stroke value
	}
}