   var x1 = 260;
  var x2 = 290;
  var x3 = 300;
  var x4 = 290;
  var x5 = 290;
  var x6 = 277;
  var x7 = 277;
  var x8 = 272;
  var x9 = 272;
  var x10 = 260;
  var x11 = 260;
  var x12 = 250;

function setup() { 
  createCanvas(750, 520);
} 

function draw() { 
  background(30,132, 199);
  
//America
  
  noStroke();
  fill(54, 135, 84);
  
  beginShape();
  vertex(50, 50);
  vertex(50, 70);
  vertex(70, 70);
  vertex(90, 100);
  vertex(125, 220);
  vertex(153, 243);
  vertex(133, 280);
  vertex(163, 340);
  vertex(140, 430);
  vertex(160, 450);
  vertex(180, 450);
  vertex(170, 430);
  vertex(250, 290);
  vertex(200, 240);
  vertex(170, 240);
  vertex(145, 220);
  vertex(150, 190);
  vertex(180, 190);
  vertex(180, 220);
  vertex(190, 190);
  vertex(250, 150);
  vertex(220, 90);
  vertex(180, 80);
  vertex(170, 90);
  vertex(150, 80);
  vertex(180, 70);
  vertex(230, 80);
  vertex(200, 50);
  endShape(CLOSE);
  
//Groenlandia 
  
  beginShape();
  vertex(220, 50);
  vertex(240, 60);
  vertex(260, 110);
  vertex(290, 70);
  vertex(300, 60);
  vertex(280, 40);
  vertex(230, 45);
  endShape(CLOSE);
  
//Europa, Asia y Africa
  
  beginShape();
  vertex(310, 210);
  vertex(330, 260);
  vertex(360, 270);
  vertex(410, 410);
  vertex(460, 380);
  vertex(476, 310);
  vertex(490, 270);
  vertex(465, 270);
  vertex(435, 235);
  vertex(465, 265);
  vertex(500, 245);  
  vertex(470, 215);
  vertex(480, 210);
  vertex(505, 230);
  vertex(510, 200);
  vertex(540, 230);
  vertex(550, 225);
  vertex(550, 205);
  vertex(570, 190);
  vertex(570, 170);
  vertex(580, 180);
  vertex(630, 150);
  vertex(620, 140);
  vertex(655, 125);
  vertex(645, 145);
  vertex(700, 100);
  vertex(550, 80);
  vertex(500, 100);
  vertex(470, 90);
  vertex(430, 100);
  vertex(400, 80);
  vertex(350, 100);
  vertex(360, 120);
  vertex(380, 120);
  vertex(380, 130);
  vertex(320, 120);
  vertex(300, 150);
  vertex(320, 170);
  vertex(340, 160);
  vertex(400, 170);
  vertex(415, 180);
  vertex(410, 190);
  vertex(390, 180);
  vertex(350, 170);
  vertex(330, 180);
  endShape(CLOSE);
  
//Australia
  
  beginShape();
  vertex(540, 350);
  vertex(570, 330);
  vertex(630, 310);
  vertex(640, 300);
  vertex(660, 380);
  vertex(640, 400);
  vertex(600, 380);
  vertex(560, 390);
  endShape(CLOSE);
  
//Polo Sur
  
  fill(255, 255, 255);
  beginShape();
  vertex(0, 520);
  vertex(30, 500);
  vertex(70, 500);
  vertex(200, 500);
  vertex(230, 510);
  vertex(300, 512);
  vertex(400, 500);
  vertex(500, 505);
  vertex(600, 500);
  vertex(700, 503);
  vertex(750,520);
  endShape(CLOSE);
  
//Variables
  
  var misHoras = hour();
  var miHorario = map(misHoras, 0, 24, 0, 750);
  
  var misSegundos = second();
  var miSegundero = map(misSegundos, 0, 59, 0, 360);

  var misMinutos = minute();
  var miMinutero = map(misMinutos, 0, 59, 0, 360);
  
//Renctangulo con Luz
  
  if(misHoras >= 6 && misHoras <= 18) {
  fill(251, 197, 53, 60);
  rect(0, 0, 375, 520);
  }
  
  if(misHoras >= 19 && misHoras <= 24 ) {
  push();
  translate(375, 0);
  fill(251, 197, 53, 60);
  rect(0, 0, 375, 520);
  pop();
  }
  
  if( misHoras >= 0 && misHoras < 6) {
  push();
  translate(375, 0);
  fill(251, 197, 53, 60);
  rect(0, 0, 375, 520);
  pop();
  }
    
//Rectangulo con Oscuridad
  
  if(misHoras >= 6 && misHoras <= 18) {
  push();
  translate(375, 0);
  fill(0, 0, 0, 90);
  rect(0, 0, 375, 520);
  pop();
  }
  
  if(misHoras >= 19 && misHoras <= 24 ) {
  fill(0, 0, 0, 90);
  rect(0, 0, 375, 520);
  }
  
  if (misHoras >= 0 && misHoras < 6) {
  fill(0, 0, 0, 90);
  rect(0, 0, 375, 520);
  }
  
  //Avion 
  
  push();
  translate(380, 230);
  rotate(misMinutos);
  fill(90, 85, 97);
  beginShape();
  vertex(158, 253);
  vertex(167, 260);
  vertex(179, 250);
  vertex(173, 264);
  vertex(182, 274);
  vertex(180, 276);
  vertex(168, 270);
  vertex(160, 280);
  vertex(156, 277);
  vertex(163, 265);
  vertex(155, 255);
  endShape(CLOSE);
  pop();
  
  //Barco
  
  fill(70, 70, 70);
  beginShape();
  vertex(x1 + misSegundos, 330);
  vertex(x2 + misSegundos, 330);
  vertex(x3 + misSegundos, 320);
  vertex(x4 + misSegundos, 320);
  vertex(x5 + misSegundos, 315);
  vertex(x6 + misSegundos, 315);
  vertex(x7 + misSegundos, 305);
  vertex(x8 + misSegundos, 305);
  vertex(x9 + misSegundos, 315);
  vertex(x10 + misSegundos, 315);
  vertex(x11 + misSegundos, 320);
  vertex(x12 + misSegundos, 320);
  endShape(CLOSE);

}
