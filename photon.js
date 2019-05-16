// photon class
class Photon{
	// parameters like x,y passed from index.js
	constructor(x,y){
		this.pos = createVector(x,y);
		const updatedC = c*0.4; // for 40 FPs we have a updated velocity
		this.vel = createVector(-updatedC,0);
		this.backtrack = [];
		this.state = false;
		this.r = 255;
		this.g = 0;
		this.b = 0;
	}

	set(m,n,p){
		this.r = m;
		this.g = n;
		this.c = p;
	}

	// standard P5Js Functions
	update(){
		if(this.state == false){
			this.pos.add(this.vel);
			this.backtrack.push(this.pos.copy());
		}

	}

	// standard P5Js Functions
	show(){

		// photon particles
		strokeWeight(4);
		stroke(this.r,this.g,this.b);
		point(this.pos.x, this.pos.y);

		// backtracking particles
		strokeWeight(1);
		noFill();
		beginShape();
		for(let v of this.backtrack){
			vertex(v.x, v.y);
		}
		endShape();
	}

	stop(){
		this.state = true;
	}

}

