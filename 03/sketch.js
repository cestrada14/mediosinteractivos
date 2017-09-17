var x = 0;
var y = 0;
var dirX= 1;
var dirX2 = -1;
var dirY = 1;
var velX = 17;
var velX1 = 2;
var velX2 =15;
var velY = 2;
var velY2 = 15;
var velY3 = 1;
var velY4 = 1;
var tamaño = 50;
var tamaño2 = 200;
var tamaño3 = 100;
var largo1 = 20;
var largo2 = 40;
var ancho1 = 20;
var ancho2 = 40;
var ancho3 = 400;
var largo3 = 400;
var ancho4 = 300;
var largo4 = 300;
var ancho5 = 200;
var largo5 = 200;
var ancho6 = 100;
var largo6 = 100; 
var diametro1 = 30;
var diametro2 = 400;
var diametro3 = 300;
var diametro4 = 200;
var diametro5 = 100;
var diametro6 = 400;
var x1 = 200;
var x2 = 200;
var x3 = 200;
var x4 = 200;
var x5 = 200;
var x6 = 200;
var x7 = 0;
var x8 = 350;
var y1 = 200;
var y2 = 200;
var y3 = 200;
var y4 = 200;
var y5 = 200;
var y6 = 200;
var y7 = 0;
var y8 = 300;
var y9 = 300;
var y10 = 300;
var y11 = 50;
var y12 = 400;
var y13 = 0;
var y14 = 400;
var y15 = 0;
var rojo = 49;
var verde = 211;
var azul = 77;

function setup() { 
  createCanvas(400, 400); 
  var millisecond = millis();
} 

function draw() { 
  background(250, 176, 36);
  
//Primer cuadrado;
  
  noStroke();
  fill(218, 63, 41);
  if(millis() > 0 && millis() < 1000) {
  rect(0, 0, tamaño, tamaño)
  tamaño = tamaño + 10
  velX= 20;
  }
  
//Circulos
  
  if(millis() > 1000 && millis() < 1250) {
  fill(248, 133, 6);
  ellipse(x1, 200, diametro1, diametro1);
  x1 = x1 - 50
  velX = 1;
  }
 
  if(millis() > 1250 && millis() < 1500) {
  fill(248, 133, 6);
  ellipse(200, y1, diametro1, diametro1);
  y1 = y1 - 50
  velX = 1;
  }
  
  if(millis() > 1500 && millis () < 1750) {
  fill(248, 133, 6);
  ellipse(x2, 200, diametro1, diametro1);
  x2 = x2 + 50;
  velX = 1;
  }
  
  if(millis() > 1750 && millis() < 2000) {
  fill(248, 133, 6);
  ellipse(200, y2, diametro1, diametro1);
  y2 = y2 + 50;
  velX = 1;
  }
  
  if(millis() > 2000 && millis() < 2250) {
  fill(248, 133, 6);
  ellipse(x3, y3, diametro1, diametro1);
  x3 = x3 - 50;
  y3 = y3 - 50;
  velX = 1;
  }
  
  if(millis() > 2250 && millis() < 2500) {
  fill(248, 133, 6);
  ellipse(x4, y4, diametro1, diametro1);
  x4 = x4 + 50;
  y4 = y4 + 50;
  velX = 1;
  }
  
  if(millis() > 2500 && millis() < 2750) {
  fill(248, 133, 6);
  ellipse(x5, y5, diametro1, diametro1);
  x5 = x5 + 50;
  y5 = y5 - 50;
  velX = 1;
  }
  
  if(millis() > 2750 && millis() < 3000) {
  fill(248, 133, 6);
  ellipse(x6, y6, diametro1, diametro1);
  x6 = x6 - 50;
  y6 = y6 + 50;
  velX = 1;
  }
  
//Rectangulos rojos triqui
  
  if(millis() > 3500 && millis() < 11000) {
  fill(250, 0, 0);
  rect(100, 0, 20, largo1);
  largo1 = largo1 + 20;
  velY = 20; 
  } 
  
  if(millis() > 4500 && millis() < 11000) {
  fill(250, 0, 0);
  rect(280, 0, 20, largo2);
  largo2 = largo2 + 20;
  velY = 20;
  } 
  
  if(millis() > 5500 && millis() < 11000) {
  fill(250, 0, 0);
  rect(0, 100, ancho1, 20);
  ancho1 = ancho1 + 20;
  velY = 20;
  } 
  
  if(millis() > 6500 && millis() < 11000) {
  fill(250, 0, 0);
  rect(0, 280, ancho2, 20);
  ancho2 = ancho2 + 20;
  velY = 20;
  } 
  
//Rectangulos rosados triqui
  
  if(millis() > 7500 && millis() < 11000) {
  fill(245, 28, 136);
  rect(50, 0, 20, largo1);
  largo1 = largo1 + 20;
  velY = 20; 
  } 
  
  if(millis() > 8000 && millis() < 11000) {
  fill(245, 28, 136);
  rect(330, 0, 20, largo2);
  largo2 = largo2 + 20;
  velY = 20;
  } 
  
  if(millis() > 8500 && millis() < 11000) {
  fill(245, 28, 136);
  rect(0, 50, ancho1, 20);
  ancho1 = ancho1 + 20;
  velY = 20;
  } 
  
  if(millis() > 9500 && millis() < 11000) {
  fill(245, 28, 136);
  rect(0, 330, ancho2, 20);
  ancho2 = ancho2 + 20;
  velY = 20;
  } 
  
 //Circulos 

  if(millis() > 11000 && millis() < 14000) {
  fill(246,68, 90);
  ellipse(200, 200, diametro2, diametro2);
  }
  
  if(millis() > 11750 && millis() < 14000) {
  fill(236,58, 80);
  ellipse(200, 200, diametro3, diametro3);
  } 
  
  if(millis() > 12500 && millis() < 14000) {
  fill(226, 48, 70);
  ellipse(200, 200, diametro4, diametro4);
  } 
  
  if(millis() > 13250 && millis() < 14000) {
  fill(216, 38, 60);
  ellipse(200, 200, diametro5, diametro5);
  } 

//Triangulos
  
  if(millis() > 14250 && millis() < 16750) {
  fill(121, 79, 260);
  triangle(390, 300, 390, 390, 300, 300);
  }

  if(millis() > 15000 && millis() < 16750) {
  fill(111, 69, 250);
  triangle(300, 390, 300, 300, 390, 390);
  } 
  
  if(millis() > 15750 && millis() < 16750) {
  fill(101, 59, 230);
  triangle(300, 300, 345, 250, 390, 300);
  } 
  
  if(millis() > 16500 && millis() < 16750) {
  fill(71, 29, 200);
  triangle(300, 300, 300, 390, 250, 350);
  } 
  
// Circulo
  
  if(millis() > 17000 && millis() < 18500) {
  fill(21, 9, 120);
  ellipse(200, 200, diametro6, diametro6);
  diametro6 = diametro6 - 4;
  velX1 = velX1;
  }
  
//Rombos
  
  if(millis() > 18750 && millis() < 26000) {
  fill(56, 163, 249);
  beginShape();
  vertex(50, 10);
  vertex(20, 50);
  vertex(50, 90);
  vertex(80, 50);
  endShape(CLOSE);
  }
  
  if(millis() > 19750 && millis() < 26000) {
  fill(46, 153, 239);
  beginShape();
  vertex(50, 90);
  vertex(80, 50);
  vertex(110, 90);
  vertex(80, 130);
  endShape(CLOSE);
  }
  
  if(millis() > 20500 && millis() < 26000) {
  fill(26, 143, 229);
  beginShape();
  vertex(50, 90);
  vertex(80, 130);
  vertex(50, 170);
  vertex(20, 130);
  endShape(CLOSE);
  }
  
  if(millis() > 21250 && millis() < 26000) {
  fill(6, 126, 209);
  beginShape();
  vertex(50, 170);
  vertex(80, 130);
  vertex(110, 170);
  vertex(80, 210);
  endShape(CLOSE);
  }
  
  if(millis() > 22500 && millis() < 26000) {
  fill(0, 116, 199);
  beginShape();
  vertex(50, 170);
  vertex(80, 210)
  vertex(50, 250);
  vertex(20, 210);
  endShape(CLOSE);
  }
  
  if(millis() > 23250 && millis() < 26000) {
  fill(0, 96, 179);
  beginShape();
  vertex(80, 210);
  vertex(110, 250)
  vertex(80, 290);
  vertex(50, 250);
  endShape(CLOSE);
  }
  
  if(millis() > 23750 && millis() < 26000) {
  fill(0, 86, 169);
  beginShape();
  vertex(50, 250);
  vertex(80, 290)
  vertex(50, 330);
  vertex(20, 290);
  endShape(CLOSE);
  }
  
  if(millis() > 24500 && millis() < 26000) {
  fill(0, 76, 159);
  beginShape();
  vertex(80, 290);
  vertex(110, 330)
  vertex(80, 370);
  vertex(50, 330);
  endShape(CLOSE);
  }
    
//Cuadrado que se mueve
  
  if(millis() > 26000 && millis() < 29190) {
  noStroke();
  fill(rojo, verde, azul);
  rect(x7, y7, 100, 100);
  x7 = x7 + (velX2 * dirX);
  }
  
  if(x7 < 0 && x7 > 340) {
  velX2 = 20;
  }
  
  if(x7 < 0 || x7 > 340) {
  rect(x7, y7, 50, 50);
  dirX = -dirX;
  rojo = rojo + 50;
  verde = verde + 150;
  azul = azul + 10;
  }
  
  if(y7 < 0 && y7 > 340) { 
  velY2 = velY2;
  }
  
//Cuadros que suben
  
  if(millis() > 29190 && millis() < 34000) {
  noStroke();
  fill(34, 149, 78);
  rect(0, 300, 400, 100);
  }
  
  if(millis() > 30000 && millis() < 34000) {
  fill(14, 129, 58);
  rect(0, 300, 100, 100);
  }
  
  if(millis() > 30000 && millis() < 34000) {
  fill(74, 179, 108);
  rect(0, y8, 100, 100);
  y8 = y8 - 10;
  }
  
  if(millis() > 31000 && millis() < 34000) {
  fill(14, 129, 58);
  rect(300, 300, 100, 100);
  }
  
  if(millis() > 31000 && millis() < 34000) {
  fill(74, 179, 108);
  rect(300, y9, 200, 100);
  y9 = y9 - 10;
  }
  
  if(millis() > 32000 && millis() < 34000) {
  fill(14, 129, 58);
  rect(100, 300, 200, 100);
  }
  
  if(millis() > 32000 && millis() < 34000) {
  fill(74, 179, 108);
  rect(100, y10, tamaño2, tamaño3);
  y10 = y10 - 3;
  tamaño2 = tamaño2 - 2;
  tamaño3 = tamaño3 - 1;
  } 
  
//Lineas diagonales
  
  if(millis() > 34000 && millis() < 38000) {
  stroke(0, 0, 0);
  strokeWeight(10);
  fill(0, 0,0);
  line(0, 50, 350, 400);
  }
  
  if(millis() > 35000 && millis() < 38000) {
  line(0, 0, 400, 400);
  }
  
  if(millis() > 36000 && millis() < 38000) {
  line(50, 0, 400, 350);
  }
  
  if(millis() > 37250 && millis() < 38000) {
  stroke(250, 250, 250);
  line(400, 0, x8, y11);
  x8 = 0
  y11 = 400
  }
  
//Circulos 
  
  if(millis() > 38000 && millis() < 38200 || millis() > 38400 && millis() < 38600 || 
  millis() > 38800 && millis() < 39000 || millis() > 39200 && millis() < 39400 || 
  millis() > 39600 && millis () < 39800) {
  noStroke();
  fill(251, 197, 52, 100);
  ellipse(150, 150, 200, 200);
  fill(261, 207, 62, 100);
  ellipse(250, 150, 200, 200);
  fill(271, 217, 72, 100);
  ellipse(200, 250, 200, 200);
  }
  
  if(millis() > 39800 && millis() < 40000) {
  fill(152, 108, 57);
  ellipse (200, 190, 20, 20);
  }
  
  if(millis() > 40000 && millis() < 40200 || millis() > 40400 && millis() < 40600) {
  noStroke();
  fill(251, 197, 52, 100);
  ellipse(150, 150, 200, 200);
  fill(261, 207, 62, 100);
  ellipse(250, 150, 200, 200);
  fill(271, 217, 72, 100);
  ellipse(200, 250, 200, 200);
  }
  
  if(millis() > 40800 && millis() < 41000) {
  fill(152, 108, 57);
  ellipse (200, 190, 20, 20);
  }
  
  if(millis() > 41000 && millis() < 41200 || millis() > 41400 && millis() < 41600 || 
  millis() > 41800 && millis() < 42000 || millis() > 42200 && millis() < 42400) {
  noStroke();
  fill(251, 197, 52, 100);
  ellipse(150, 150, 200, 200);
  fill(261, 207, 62, 100);
  ellipse(250, 150, 200, 200);
  fill(271, 217, 72, 100);
  ellipse(200, 250, 200, 200);
  }
  
  if(millis() > 42400 && millis() < 42600) {
  fill(152, 108, 57);
  ellipse (200, 190, 20, 20);
  }
  
  if(millis() > 42600 && millis() < 42800 || millis() > 43000 && millis() < 43200 || 
  millis() > 43400 && millis() < 43600 || millis() > 43800 && millis() < 44000 || 
  millis() > 44200 && millis() < 44400 || millis() > 44600 && millis() < 44800 || 
  millis() > 45000 && millis() < 45200 || millis() > 45400 && millis() < 45600) {
  noStroke();
  fill(251, 197, 52, 100);
  ellipse(150, 150, 200, 200);
  fill(261, 207, 62, 100);
  ellipse(250, 150, 200, 200);
  fill(271, 217, 72, 100);
  ellipse(200, 250, 200, 200);
  }
 
//Rectanguos
  
  if(millis() > 45600 && millis() < 51000) {
  fill(45, 83, 159);
  rect(0, 0, ancho3, largo3);
  }
  
  if(millis() > 46200 && millis() < 51000) {
  noStroke();
  fill(35, 73, 149);
  ellipse(200, 200, ancho3, largo3);
  } 
  
  if(millis() > 46800 && millis() < 51000) {
  noStroke();
  fill(25, 63, 139);
  triangle(200, 0, 400, 400, 0, 400);
  }
  
  if(millis() > 47600 && millis() < 51000) {
  noStroke()
  fill(15, 53, 129);
  beginShape();
  vertex(200, 0);
  vertex(400, 200);
  vertex(200, 400);
  vertex(0, 200);
  endShape(CLOSE);
  }
  
  if(millis() > 48200 && millis() < 51000) {
  fill(5, 43, 119);
  rect(100, 100, 200, 200);
  }
  
  if(millis() > 48800 && millis() < 51000) {
  noStroke();
  fill(0, 33, 109);
  ellipse(200, 200, 200, 200);
  }
 
  if(millis() > 49400 && millis() < 51000) {
  noStroke();
  fill(0, 23, 99);
  triangle(200, 100, 300, 250, 100, 250);
  }
  
  if(millis() > 50000 && millis() < 51000) {
  noStroke()
  fill(0, 13, 89);
  beginShape();
  vertex(200, 100);
  vertex(300, 200);
  vertex(200, 300);
  vertex(100, 200);
  endShape(CLOSE);
  }

    
}