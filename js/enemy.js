class Enemy {

	constructor() {
		this.data = [[[0,0],2,true]];	//[enemy] : enemy = [pos,vel,alive]
		this.level = 1;
		this.end = false;
	}

	new_level() {
		this.data = [];
		this.level++;
		for(let i = 0; i < this.level; i++) {
			this.data.push([[i*70,0],this.level,true]);
		}
	}

	run(bullets) {
		let new_enemies = [];
		for(const enemy of this.data) {
			fill('gray');
			image(invader_image, enemy[0][0], enemy[0][1], 60, 60);
			//square(enemy[0][0], enemy[0][1], 30);
			enemy[0][0] += enemy[1];
			if(enemy[0][0] > width - 30) {
				enemy[0][1] += 30;
				enemy[1] = -(this.level + 1 + enemy[0][1]/30);
			}
			if(enemy[0][0] < 0) {
				enemy[0][1] += 30;
				enemy[1] = this.level + 1 + enemy[0][1]/30;
			}
			for(const bullet of bullets) {
				if(bullet[0] < enemy[0][0] + 60  && bullet[0] > enemy[0][0] && bullet[1] < enemy[0][1] + 60 && bullet[1] > enemy[0][1]) enemy[2] = false;
			}
			if(enemy[0][1] > height) {
				this.end = true;
			}
			if(enemy[2]) new_enemies.push(enemy);
		}
		this.data = new_enemies;
		if(this.data.length === 0){
			this.new_level();
		}
	}
}