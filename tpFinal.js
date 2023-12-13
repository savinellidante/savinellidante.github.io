let aventuraGrafica;
let imagenes = [];

function setup() {
  createCanvas(600, 600);
  aventuraGrafica = new GeneradorDePantallas(imagenes);
}

function draw() {
  aventuraGrafica.mostrarPantalla();
}

function keyPressed() {
  aventuraGrafica.cambiarPantalla();
}

function preload() {
  imagenes[0] = loadImage("data/imagen1.jpeg");
  imagenes[1] = loadImage("data/imagen2.jpg");
  imagenes[2] = loadImage("data/imagen3.jpg");
  imagenes[3] = loadImage("data/imagen4.jpg");
  imagenes[4] = loadImage("data/imagen5.jpg");
  imagenes[5] = loadImage("data/imagen6.jpg");
  imagenes[6] = loadImage("data/imagen7.jpg");
  imagenes[7] = loadImage("data/imagen8.jpg");
  imagenes[8] = loadImage("data/imagen9.jpg");
  imagenes[9] = loadImage("data/imagen10.jpg");
  imagenes[10] = loadImage("data/imagen11.jpg");
  imagenes[11] = loadImage("data/imagenGanaste.jpg");
  imagenes[12] = loadImage("data/imagenPerdiste.jpg");
}
