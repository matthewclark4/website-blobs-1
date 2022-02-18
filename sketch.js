let dots = [];
let dotCount = 300;

let balls = [];
let ballCount = 2;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);

	background(9, 64, 255);
	strokeWeight(1);
	stroke(253, 146, 48);
	noFill();
	ellipse(width / 2, height / 2, height / 2, height / 2);

	stroke(253, 146, 48);
	for (var i = 0; i < dotCount; i++) {
		dots[i] = new Dot();
	}

	for (var i=0; i < ballCount; i++) {
		balls[i] = new Ball();
	}
}

function draw() {
	stroke(253, 146, 48);
	strokeWeight(110);

	for (var i=0; i<balls.length; i++) {
		balls[i].update();
	}

	strokeWeight(9);
	stroke(9, 64, 255);
	for (var i=0; i<dots.length; i++) {
		dots[i].update();
	}

	fill(253, 146, 48);
	stroke(253, 146, 48);
	strokeWeight(50);
	ellipse(mouseX, mouseY, 60, 60);


}

class Dot {
	constructor() {
		// let x;
		// let y;
		// let vx;
		// let vy;
		do {
			this.x = random(width);
			this.y = random(height);
		} while (get(int(this.x), int(this.y)) == color(0));

		this.rad = random(TWO_PI);
		this.vx = cos(this.rad);
		this.vy = sin(this.rad);
	}

	update() {
		this.x += this.vx;
		if (this.x < 0 || this.x > width) {
			this.vx = -this.vx;
			this.x += this.vx * 2;
		}
		this.y += this.vy;
		if (this.y < 0 || this.y > width) {
			this.vy = -this.vy;
			this.y += this.vy * 2;
		}
		if (get(int(this.x), int(this.y)) != color(0)) {
			point(this.x, this.y);
			do {
				this.x = random(width);
				this.y = random(height);
			} while (get(int(this.x), int(this.y)) == color(0));
			this.rad = random(TWO_PI);
			this.vx = cos(this.rad);
			this.vy = sin(this.rad);
		}
	}
}

class Ball {
	constructor() {
	  this.x = width/2; 
	  this.y = height/2;
	  this.vx=0;
	  this.vy=0;
	}
  
	update() {
		this.vx += random(-1, 1);
		this.vy += random(-1, 1);
	  if (abs(this.vx) > 10) this.vx=0;
	  if (abs(this.vy) > 10) this.vy=0; 
	  this.x+=this.vx;
	  this.y+=this.vy;
	  if (this.x<0 || this.x>width ) { 
		this.x -=this.vx ; 
		this.vx = -this.vx;
	  }
	  if (this.y<0 || this.y>height) { 
		this.y -=this.vy ; 
		this.vy = -this.vy;
	  }
	  point (this.x, this.y);
	}
  }