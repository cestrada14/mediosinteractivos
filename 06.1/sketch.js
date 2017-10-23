var miImagen;
var miFiltro;

//Cargar Imagenes

function preload() {
  miImagen = loadImage("Fondo1.jpg");
  miFiltro = loadImage("Filtro1.png");
}

//Filtro

function setup() { 
  createCanvas(500, 364);
  
  miImagen.mask(miFiltro);
}

//Fondo

function draw() { 
  
  image(miImagen, 0, 0);
  
}