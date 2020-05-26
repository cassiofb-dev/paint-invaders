let width = screen.width, height = screen.height;
let game, ship_image, invader_image;

function preload() {
	ship_image = loadImage('img/falcon.bmp');
	invader_image = loadImage('img/invader.png');
}

function setup() {
	createCanvas(width, height);
	fill('blue');
	frameRate(100);
	game = new Game();
}

function draw() {
	background(0);
	game.run();
}