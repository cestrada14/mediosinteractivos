var miImagen;

var x = 0;
var y = 0;

//Cargar Imagen

function preload() {
  miImagen = loadImage("Aurora.jpg");

}

function setup() { 
  createCanvas(1400, 788);
  
}

function draw() {
  
//Imagen
  
  miImagen.loadPixels();
  
  var pix = miImagen.get(x, y);
  print(pix);
  var miRojo = pix [0];
  var miVerde = pix [1];
  var miAzul = pix [2];
  var miTrans = pix [3];
  
  fill(miRojo, miVerde, miAzul, miTrans);
  ellipse(x, y, 6, 6);
  
//Movimiento Pixeles
  
  y = y + 5;
  
  if(y > miImagen.height){
  x = x + 5;
  y = 0;
  
  
  
  
  
}
}

