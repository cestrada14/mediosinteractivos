function setup() { 
  createCanvas(400, 894);
  
//Fondo
  
 background(204, 185, 148);
  
//Linea Negra

 strokeWeight(2);
 line(0, 1, 400, 1);
  
//Rectangulos Negros
  
 posX = 0;
 posY = 20;
  
 fill(0, 0, 0);
 strokeWeight(1);
  
 rect(posX, posY, 80, 211);
 rect(posX+241, posY, 79, 211);
 rect(posX+81, posY+424, 79, 212);
  
//Rectángulos Rayas Rojas
  
 fill(168, 37, 28);
 noStroke();
  
//Cruces Beige

 strokeWeight(2);
  
 posXLB = 40;
 posYLB = 18;

 stroke(204, 185, 148);
 line(posXLB, posYLB, 40, 323);
 line(posX, posYLB+106, 80, posYLB+106);
 line(posXLB+240, posYLB, 280, 232); 
 line(posXLB+200, posYLB+106, posXLB+280, posYLB+106);

//Cruces Negras
 
 posXLN = 160;
 posYLN = 338;

 stroke(0, 0, 0);
 line(posXLN+40, 232, posXLN+40, posYLN+106);
 line(posXLN, posYLN, 240, posYLN);
 line(posXLN+200, 232, posXLN+200, posYLN+106);
 line(posXLN+160, posYLN, 400, posYLN);
 
//Cruces Rojas

 posXLR = 40;
 posYLR = 550;
 
 stroke(173, 44, 31);
 line(posXLR, posYLR+106, posXLR, posYLR+318);
 line(posX, posYLR+212, 80, posYLR+212);
 line(posXLR+80, 444, posXLR+80, 656);
 line(80, posYLR-2, 160, posYLR-2);
 line(posXLR+240, 656, posXLR+240, posYLR+318);
 line(posXLR+202, posYLR+212, posXLR+281, posYLR+212);
 
//Rectangulos Beige Oscuro de Fondo
  
 fill(162, 144, 108);
 noStroke();
 rect(161, 20, 80, 212);
 rect(321, 20, 80, 212);
 rect(81, 232, 80, 212);
 rect(0, 444, 81, 213);
 rect(241, 444, 81, 213);
 rect(81, 657, 80, 212);
  
//Rectangulos Rojos

 fill(144, 28, 19);
 strokeWeight(1);

 for(rectangulo = 20; rectangulo <= 222; rectangulo = rectangulo + 35) {
   rect(81, rectangulo, 80, 19);
 }

 for(rectangulo = 250; rectangulo <= 434; rectangulo = rectangulo + 35) {
   rect(0, rectangulo, 81, 19);
 }
 
 for(rectangulo = 250; rectangulo <= 434; rectangulo = rectangulo + 35) {
   rect(240, rectangulo, 82, 19);
 }
  
 for(rectangulo = 444; rectangulo <= 636; rectangulo = rectangulo + 35) {
   rect(161, rectangulo, 80, 19);
 }

 for(rectangulo = 444; rectangulo <= 636; rectangulo = rectangulo + 35) {
   rect(321, rectangulo, 80, 19);
 }
  
 for(rectangulo = 656; rectangulo <= 850; rectangulo = rectangulo + 35) {
   rect(160, rectangulo+1, 81, 19);
 }

 for(rectangulo = 656; rectangulo <= 850; rectangulo = rectangulo +35) {
   rect(322, rectangulo+1, 80, 19);
 }
  
//Rectangulos cafes 
  
 fill(82, 41, 31);

 for(rectangulo = 20; rectangulo <= 200; rectangulo = rectangulo + 35) {
   rect(161, rectangulo, 80, 19);
 }

 for(rectangulo = 20; rectangulo <= 200; rectangulo = rectangulo + 35) {
   rect(321, rectangulo, 400, 19);
 }
 
 for(rectangulo = 20; rectangulo <= 200; rectangulo = rectangulo + 35) {
   rect(81, rectangulo+230, 80, 19);
 }
 
 for(rectangulo = 20; rectangulo <= 200; rectangulo = rectangulo + 35) {
   rect(0, rectangulo+424, 81, 19);
 }

 for(rectangulo = 20; rectangulo <= 200; rectangulo = rectangulo + 35) {
   rect(241, rectangulo+424, 81, 19);
 }
 
 for(rectangulo = 21; rectangulo <= 200; rectangulo = rectangulo + 35) {
   rect(81, rectangulo+636, 80, 19);
 }
  
//Linea Beige Abajo
 
 stroke(162, 144, 108);
 strokeWeight(2);
 line(0, 868, 80, 868);
  
//Lineas Negras Abajo
  
 stroke(0, 0, 0);
 line(162, 868, 240, 868);
 line(323, 868, 400, 868);
}