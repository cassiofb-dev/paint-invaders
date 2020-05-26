class Player {

	constructor() {
		this.pos = [width/2, height/2];
		this.vel = [0, 0];
		this.bullets = [];
	}

	setVel(vel) {
		this.pos[0] += vel[0];
		this.pos[1] += vel[1];
		this.vel[0] += vel[0];
		this.vel[1] += vel[1];
	}

	fire() {
		this.bullets.push([this.pos[0],this.pos[1] - 10]);
	}

	run_bullets() {
		let new_bullets = [];
		for(const bullet of this.bullets) {
			bullet[1]-= 5;
			fill('red');
			circle(bullet[0]+50, bullet[1], 30);
			if(bullet[0] < width && bullet[0] > 0 && bullet[1] < height && bullet[1] > 0) new_bullets.push(bullet);
		}
		this.bullets = new_bullets;
	}

	run() {
		fill('red');
		this.run_bullets();
		if(this.pos[0] > 0 && this.pos[0] < width - 100) this.pos[0] += this.vel[0];
		if(this.pos[1] > 0 && this.pos[1] < height - 100) this.pos[1] += this.vel[1];
		fill('white');
		//square(this.pos[0], this.pos[1], 30);
		image(ship_image, this.pos[0], this.pos[1], 100, 100);
	}
}