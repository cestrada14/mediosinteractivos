//Variables

var name = "flipbook";

var x1 = 490;
var x2 = 760;
var x3 = 810;
var x4 = 762;
var x5 = 707;
var x6 = 725;
var x7 = 705;
var x8 = 687;
var x9 = 670;
var x10 = 690;
var x11 = 705;
var x12 = 710;
var x13 = 716;
var x14 = 717;
var x15 = 715;
var x16 = 705;
var x17 = 698;
var x18 = 714;
var x19 = 702;
var x20 = 680;
var x21 = 690;
var x22 = 677;
var x23 = 660;
var x24 = 620;
var x25 = 610;
var x26 = 610;
var x27 = 594;
  
var y1 = 201;
var y2 = 437;
var y3 = 350;
var y4 = 255;
var y5 = 214;
var y6 = 183;
var y7 = 170;
var y8 = 200;
var y9 = 187;
var y10 = 112;
var y11 = 105;
var y12 = 100;
var y13 = 90;
var y14 = 85;
var y15 = 75;
var y16 = 65;
var y17 = 63;
var y18 = 18;
var y19 = 10;
var y20 = 63;
var y21 = 8;
var y22 = 0;
var y23 = 90;
var y24 = 156;
var y25 = 147;
var y26 = 110;
var y27 = 98;

var yy1 = 350;
var yy2 = 360;
var yy3 = 300;
  
var dirX = 1;
var velX = 1;

var dirY = 1;
var velY = 1;


function setup() {
  createCanvas(1700, 1100);
  frameRate(4);
  var millisecond = millis();}

function draw() {
  
  background(205, 205, 205);
  
//Nubes
  
  noStroke();
  fill(250, 250, 250);
  
  ellipse(450, 150, 300, 100);
  ellipse(510, 120, 300, 100);
  ellipse(550, 160, 300, 100);
  
  ellipse(900, 450, 300, 100);
  ellipse(950, 420, 300, 100);
  ellipse(1000, 460, 300, 100);
  
  ellipse(1400, 250, 300, 100);
  ellipse(1450, 220, 300, 100);
  ellipse(1480, 260, 300, 100);
  

//Atracción que descuelga
  
  fill(140, 140, 140);
  
  beginShape();
  vertex(1350, 1150);
  vertex(1350, 150);
  vertex(1190, 150);
  vertex(1160, 100);
  vertex(1190, 50);
  vertex(1570, 50);
  vertex(1600, 100);
  vertex(1570, 150);
  vertex(1410, 150);
  vertex(1410, 1150);
  endShape(CLOSE);
  
//Comienzo de la figura

  beginShape();
  vertex(1200, yy3);
  vertex(1200, yy1);
  
//Pies
  
  vertex(1250, yy1);
  vertex(1250, yy2);
  vertex(1254, yy2);
  vertex(1254, yy1);
  vertex(1257, yy1);
  vertex(1257, yy2);
  vertex(1261, yy2);
  vertex(1261, yy1);
  
  vertex(1267, yy1);
  vertex(1267, yy2);
  vertex(1271, yy2);
  vertex(1271, yy1);
  vertex(1273, yy1);
  vertex(1273, yy2);
  vertex(1277, yy2);
  vertex(1277, yy1);
  
  vertex(1282, yy1);
  vertex(1282, yy2);
  vertex(1286, yy2);
  vertex(1286, yy1);
  vertex(1288, yy1);
  vertex(1288, yy2);
  vertex(1292, yy2);
  vertex(1292, yy1);
  
  vertex(1297, yy1);
  vertex(1297, yy2);
  vertex(1301, yy2);
  vertex(1301, yy1);
  vertex(1303, yy1);
  vertex(1303, yy2);
  vertex(1307, yy2);
  vertex(1307, yy1);
  
  vertex(1312, yy1);
  vertex(1312, yy2);
  vertex(1316, yy2);
  vertex(1316, yy1);
  vertex(1318, yy1);
  vertex(1318, yy2);
  vertex(1322, yy2);
  vertex(1322, yy1);
  
  vertex(1327, yy1);
  vertex(1327, yy2);
  vertex(1331, yy2);
  vertex(1331, yy1);
  vertex(1333, yy1);
  vertex(1333, yy2);
  vertex(1337, yy2);
  vertex(1337, yy1);
  
  vertex(1342, yy1);
  vertex(1342, yy2);
  vertex(1346, yy2);
  vertex(1346, yy1);
  vertex(1348, yy1);
  vertex(1348, yy2);
  vertex(1352, yy2);
  vertex(1352, yy1);
  
  vertex(1408, yy1);
  vertex(1408, yy2);
  vertex(1412, yy2);
  vertex(1412, yy1);
  vertex(1414, yy1);
  vertex(1414, yy2);
  vertex(1418, yy2);
  vertex(1418, yy1);
  
  vertex(1423, yy1);
  vertex(1423, yy2);
  vertex(1427, yy2);
  vertex(1427, yy1);
  vertex(1429, yy1);
  vertex(1429, yy2);
  vertex(1433, yy2);
  vertex(1433, yy1);
  
  vertex(1438, yy1);
  vertex(1438, yy2);
  vertex(1442, yy2);
  vertex(1442, yy1);
  vertex(1444, yy1);
  vertex(1444, yy2);
  vertex(1448, yy2);
  vertex(1448, yy1);
  
  vertex(1453, yy1);
  vertex(1453, yy2);
  vertex(1457, yy2);
  vertex(1457, yy1);
  vertex(1459, yy1);
  vertex(1459, yy2);
  vertex(1463, yy2);
  vertex(1463, yy1);
  
  vertex(1468, yy1);
  vertex(1468, yy2);
  vertex(1472, yy2);
  vertex(1472, yy1);
  vertex(1474, yy1);
  vertex(1474, yy2);
  vertex(1478, yy2);
  vertex(1478, yy1);
  
  vertex(1483, yy1);
  vertex(1483, yy2);
  vertex(1487, yy2);
  vertex(1487, yy1);
  vertex(1489, yy1);
  vertex(1489, yy2);
  vertex(1493, yy2);
  vertex(1493, yy1);

//Final de la figura
  
  vertex(1550, yy1);
  vertex(1550, yy3);
  endShape(CLOSE);
  

//Movimiento de atracción que se descuelga 
  yy1 = (yy1 * velY) + 17.2;
  yy2 = (yy2 * velY) + 17.2;
  yy3 = (yy3 * velY) + 17.2;
  
//Rueda de la fortuna
  
  stroke(100, 104, 109);
  strokeWeight(30);
  noFill();
  ellipse(850, 1100, 1300, 1300);
  
  stroke(100, 104, 109);
  strokeWeight(30);
  fill(205, 205, 205);
  ellipse(850, 1100, 500, 500);
  
  noStroke();
  fill(100, 104, 109);
  
  beginShape();
  vertex(834, 1095);
  vertex(1500, 1050);
  vertex(1500, 1090);
  vertex(868, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(834, 1090);
  vertex(1480, 920);
  vertex(1490, 960);
  vertex(868, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(834, 1100);
  vertex(1415, 780);
  vertex(1435, 820);
  vertex(868, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(834, 1100);
  vertex(1315, 640);
  vertex(1335, 680);
  vertex(868, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(834, 1100);
  vertex(1170, 530);
  vertex(1205, 555);
  vertex(868, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(834, 1100);
  vertex(1010, 460);
  vertex(1050, 465);
  vertex(868, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(834, 1100);
  vertex(834, 450);
  vertex(868, 450);
  vertex(868, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(868, 1100);
  vertex(700, 470);
  vertex(666, 470);
  vertex(834, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(868, 1100);
  vertex(566, 530);
  vertex(532, 530);
  vertex(834, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(868, 1100);
  vertex(435, 590);
  vertex(402, 610);
  vertex(834, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(868, 1090);
  vertex(313, 710);
  vertex(293, 740);
  vertex(834, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(868, 1090);
  vertex(250, 875);
  vertex(230, 910);
  vertex(834, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(868, 1090);
  vertex(200, 1050);
  vertex(200, 1090);
  vertex(834, 1100);
  endShape(CLOSE);
  
//Estructura montaña rusa
  
  fill(0, 0, 0);
  strokeWeight(0);
  
  beginShape();
  vertex(201, 187);
  vertex(151, 197);
  vertex(1090, 1100);
  vertex(1150, 1100);
  endShape(CLOSE);
  
  beginShape();
  vertex(151, 137);
  vertex(201, 187);
  vertex(201, 1100);
  vertex(151, 1100);
  endShape();
  
  beginShape();
  vertex(345, 350);
  vertex(395, 400);
  vertex(395, 1100);
  vertex(345, 1100);
  endShape();
  
  beginShape();
  vertex(525, 1100);
  vertex(575, 1100);
  vertex(575, 550);
  vertex(525, 500);
  endShape(CLOSE);
  
  beginShape();
  vertex(695, 1100);
  vertex(745, 1100);
  vertex(745, 750);
  vertex(695, 700);
  endShape(CLOSE);
  
  beginShape();
  vertex(860, 1100);
  vertex(910, 1100);
  vertex(910, 870);
  vertex(860, 830);
  endShape(CLOSE);
  
  beginShape();
  vertex(1000, 1100);
  vertex(1050, 1100);
  vertex(1050, 1030);
  vertex(1000, 980);
  endShape(CLOSE);
  
//Carrito de la montaña rusa

  noStroke();
  
  beginShape();
  vertex(x1 - 340, y1 - 60);
  vertex(x2 - 360, y2 - 50);
  vertex(x3 - 360, y3 - 60);
  vertex(x4 - 360, y4 - 53);
  vertex(x5 - 360, y5 - 65);
  vertex(x6 - 360, y6 - 60);
  vertex(x7 - 360, y7 - 60);
  vertex(x8 - 360, y8 - 65);
  vertex(x9 - 360, y9 - 70);
  vertex(x10 - 360, y10 - 60);
  vertex(x11 - 360, y11 - 60);
  vertex(x12 - 360, y12 - 60);
  vertex(x13 - 360, y13 - 60);
  vertex(x14 - 360, y14 - 60);
  vertex(x15 - 360, y15 - 60);
  vertex(x16 - 360, y16 - 60);
  vertex(x17 - 360, y17 - 60);
  vertex(x18 - 360, y18 - 60);
  vertex(x19 - 360, y19 - 60);
  vertex(x20 - 360, y20 - 60);
  vertex(x21 - 360, y21 - 60);
  vertex(x22 - 360, y22 - 60);
  vertex(x23 - 360, y23 - 30);
  vertex(x24 - 360, y24 - 30);
  vertex(x25 - 330, y25 - 50);
  vertex(x27 - 360, y27 - 40);
  endShape(CLOSE);
  
//Movimiento carrito de la montaña rusa
  
  x1 = (x1*velX) + 17.2;
  x2 = (x2*velX) + 17.2;
  x3 = (x3*velX) + 17.2;
  x4 = (x4*velX) + 17.2;
  x5 = (x5*velX) + 17.2;
  x6 = (x6*velX) + 17.2;
  x7 = (x7*velX) + 17.2;
  x8 = (x8*velX) + 17.2;
  x9 = (x9*velX) + 17.2;
  x10 = (x10*velX) + 17.2;
  x11 = (x11*velX) + 17.2;
  x12 = (x12*velX) + 17.2;
  x13 = (x13*velX) + 17.2;
  x14 = (x14*velX) + 17.2;
  x15 = (x15*velX) + 17.2;
  x16 = (x16*velX) + 17.2;
  x17 = (x17*velX) + 17.2;
  x18 = (x18*velX) + 17.2;
  x19 = (x19*velX) + 17.2;
  x20 = (x20*velX) + 17.2;
  x21 = (x21*velX) + 17.2;
  x22 = (x22*velX) + 17.2;
  x23 = (x23*velX) + 17.2;
  x24 = (x24*velX) + 17.2;
  x25 = (x25*velX) + 17.2;
  x26 = (x26*velX) + 17.2;
  x27 = (x27*velX) + 17.2;
  
  y1 = (y1*velY) + 17.2;
  y2 = (y2*velY) + 17.2;
  y3 = (y3*velY) + 17.2;
  y4 = (y4*velY) + 17.2;
  y5 = (y5*velY) + 17.2;
  y6 = (y6*velY) + 17.2;
  y7 = (y7*velY) + 17.2;
  y8 = (y8*velY) + 17.2;
  y9 = (y9*velY) + 17.2;
  y10 = (y10*velY) + 17.2;
  y11 = (y11*velY) + 17.2;
  y12 = (y12*velY) + 17.2;
  y13 = (y13*velY) + 17.2;
  y14 = (y14*velY) + 17.2;
  y15 = (y15*velY) + 17.2;
  y16 = (y16*velY) + 17.2;
  y17 = (y17*velY) + 17.2;
  y18 = (y18*velY) + 17.2;
  y19 = (y19*velY) + 17.2;
  y20 = (y20*velY) + 17.2;
  y21 = (y21*velY) + 17.2;
  y22 = (y22*velY) + 17.2;
  y23 = (y23*velY) + 17.2;
  y24 = (y24*velY) + 17.2;
  y25 = (y25*velY) + 17.2;
  y26 = (y26*velY) + 17.2;
  y27 = (y27*velY) + 17.2;

// Fotos 

  //if(frameCount < 70) {
  //saveCanvas(name + frameCount, 'jpg');
  //}
  


  }


 
 
  




  