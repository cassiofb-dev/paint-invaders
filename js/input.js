function keyPressed() {
	switch(keyCode) {
		case ENTER:
			game.player.fire();
			console.log(game.enemy.data);
			break;
		case UP_ARROW:
			game.player.setVel([0,-1]);
			break;
		case LEFT_ARROW:
			game.player.setVel([-1,0]);
			break;
		case DOWN_ARROW:
			game.player.setVel([0,1]);
			break;
		case RIGHT_ARROW:
			game.player.setVel([1,0]);
			break;
	}
}