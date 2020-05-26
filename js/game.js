class Game {

	constructor() {
		this.player = new Player();
		this.enemy = new Enemy();
	}

	run() {
		this.player.run();
		this.enemy.run(this.player.bullets);
		if(this.enemy.end) this.enemy = new Enemy();
	}
}