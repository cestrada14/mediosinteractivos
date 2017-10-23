var miImagen;
 
var X = 0;
var Y = 0;
 
//Cargar Imagen

function preload(){
  miImagen = loadImage('Ajedrez.png');
}
 
function setup() {
  createCanvas(618, 640); 
}
 
function draw() {
  noStroke();
 
//Imagen
  
  miImagen.loadPixels();
 
  var pix = miImagen.get(mouseX, mouseY);
  
//Movimiento Pixeles
  
  pix = (255, 255, 255);
  miImagen.set(mouseX, mouseY, pix);
  miImagen.updatePixels();
 
  image(miImagen, 0, 0);
 
}