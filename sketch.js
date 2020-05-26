let width = screen.width, height = screen.height;
let game, ship_image, invader_image, background_img;

function preload() {
	ship_image = loadImage('img/falcon.bmp');
	invader_image = loadImage('img/invader.png');
	background_img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/1024px-Hubble_ultra_deep_field.jpg');
}

function setup() {
	createCanvas(width, height);
	fill('blue');
	frameRate(100);
	game = new Game();
}

function draw() {
	background(background_img);
	game.run();
}