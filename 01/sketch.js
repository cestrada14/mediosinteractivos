// Fondo
function setup() { 
  createCanvas(350, 350);
} 

function draw() { 
  background(226, 211, 187);
  
//Fondo blanco
 strokeWeight();
 fill(241, 233, 238);
 beginShape();
 vertex(0, 0);
 vertex(243,0);
 vertex(245, 25);
 vertex(120, 110);
 vertex(270, 350);
 vertex(145, 350);
 vertex(-2, 120);
 vertex(43, 91);
 vertex(0, 25);
 endShape(CLOSE);

//Fondo cafe
 fill(163, 98, 53);
 beginShape();
 vertex(210, 0);
 vertex(235, 0);
 vertex(122, 74);
 vertex(108, 50);
 endShape(CLOSE); 
  
 beginShape();
 vertex(120, 110);
 vertex(137, 100);
 vertex(280, 350);
 vertex(270, 350);
 endShape(CLOSE);
 
 beginShape();
 vertex(230, 350);
 vertex(210, 350);
 vertex(146, 250);
 vertex(116, 160);
 endShape(CLOSE);
  
 beginShape();
 vertex(190, 350);
 vertex(180, 350);
 vertex(115, 250);
 vertex(140, 257);
 endShape(CLOSE);
 
//Fondo beige
 fill(213, 196, 187);
 beginShape();
 vertex(120, 110);
 vertex(137, 100);
 vertex(108, 50);
 vertex(89, 60);
 endShape(CLOSE);
 
//Fondo negro
 fill(0, 0, 0);
 beginShape();
 vertex(23, 60);
 vertex(42, 90);
 vertex(64, 80);
 vertex(46, 51);
 endShape(CLOSE);
  
 beginShape();
 vertex(46, 51);
 vertex(74, 37);
 vertex(60, 17);
 vertex(32, 28);
 endShape(CLOSE);
  
 beginShape();
 vertex(40, 187);
 vertex(27, 167);
 vertex(51, 151);
 vertex(63, 172);
 endShape(CLOSE);

 beginShape();
 vertex(63, 172);
 vertex(82, 158);
 vertex(91, 170);
 vertex(80, 200);
 endShape(CLOSE);

//Cuadrado rosado
 fill(194, 22, 82);
 rect(0, 0, 43, 40);

//Esquina roja
 fill(152, 0, 50);
 beginShape();
 vertex(0, 0);
 vertex(15,0);
 vertex(23, 7);
 vertex(0, 13);
 endShape(CLOSE);
 
//Esquina rosado claro
 fill(207, 105, 137);
 beginShape();
 vertex(0, 40);
 vertex(9, 40);
 vertex(0, 24);
 endShape(CLOSE);
 
 //Cuadrado negro esquina izquierda
 fill(0, 0, 0);
 beginShape();
 vertex(0, 13);
 vertex(20, 7);
 vertex(31, 28);
 vertex(9, 37);
 vertex(0, 25);
 endShape(CLOSE);
      
//Triqui
 stroke(0, 0, 0);
 strokeWeight(3);
 line(348, 320, 350, 160);
 line(276, 170, 350, 173);
 line(274, 215, 350, 218); 
 line(274, 260, 350, 263); 

//Cuadro nergo arriba
 fill(0, 0, 0);
 beginShape();
 vertex(248, 22);
 vertex(273, 60);
 vertex(231, 89);
 vertex(207, 52);
 endShape(CLOSE);
  
//Puntos cuadrado negro encima
 strokeWeight(2);
 stroke(250, 250, 250);
 point(250, 50);
 point(253, 60);
 point(260, 62);
 point(263, 55);
 point(256, 48);
 point(255, 40);
 point(247, 38);
 point(240, 36);
 point(242, 45);
 point(242, 57);
 point(235, 42);
 point(224, 43);
 point(218, 50);
 point(220, 60);
 point(230, 53);
 point(228, 64);
 point(230, 75);
 point(240, 73);
 point(250, 71);
 point(240, 65);
 point(248, 64);
 point(236, 50);
 point(233, 60);
 point(225, 50);
 point(212, 55);
 point(222, 70);
 point(232, 83);
 point(240, 80);
 point(248, 30);

//Circulo rojo y morado
 noStroke();
 fill(225, 0, 0, 150);
 ellipse(275,20,78,78);
 fill(161, 113, 137, 150);
 ellipse(273, 20, 70, 70);
  
//Circulo azul
 fill(35, 71, 143);
 ellipse(134, 215, 122, 122);
 
//circulo azul opaco
 fill(12, 28, 86, 195);
 beginShape();
 vertex(93, 169);
 vertex(112, 158);
 vertex(175, 261);
 vertex(159, 271);
 endShape(CLOSE);
 
 beginShape();
 vertex(77, 192);
 vertex(90, 170);
 vertex(149, 275);
 vertex(132, 276);
 endShape(CLOSE);

//Diagonal negra izquierda
 stroke(0, 0, 0);
 strokeWeight(11);
 line(46, 270, 280, 350);
  
//Medio circulo
 fill(226, 211, 187);
 stroke(198, 85, 76);
 strokeWeight(4);
 ellipse(-15, 265, 115, 115);
 fill(203, 205, 228);
 stroke(209, 185, 54);
 ellipse(-15, 265, 80, 80);
  
//Triangulo verde
 strokeWeight();
 fill(21, 55, 28);
 triangle(0, 285, 45, 350, 0, 350);
  
//Diagonal roja
 stroke(225, 0, 0);
 strokeWeight(10);
 line(0,335, 95, 265);

//Diagonal negra derecha
 stroke(0, 0 ,0);
 strokeWeight(11);
 line(95, 264, 350, 70);

//Cuadrado rosado claro
 strokeWeight();
 fill(236, 179, 193);
 beginShape();
 vertex(21, 104);
 vertex(43, 92);
 vertex(57, 113);
 vertex(35, 128);
 endShape(CLOSE);

//Diagonal derecha
 strokeWeight(2);
 line(0, 117, 108, 50);
 line(108, 50, 210, 0);
 line(105, 85, 235, 0);
 line(120, 110, 247, 23);
 line(12, 143, 76, 102);
 line(27, 167, 90, 125);
 line(40, 187, 104, 145);
 line(54, 208, 126, 160);

//Diagonal izquierda
 strokeWeight(2);
 line(80, 0, 280, 350);
 line(50, 0, 270, 350);
 line(15, 0, 230, 350);
 line(0, 25, 210, 350)
 line(73, 139, 190, 350);
 line(21, 106, 180, 350);
 line(0, 125, 145, 350);
 line(25, 60, 158, 0);
 line(9, 37, 105, 0);
 line(0, 13, 40, 0);
  
//Diagonal arriba semi circulos
 strokeWeight(5);
 stroke(95, 120, 66);
 line(0, 200, 40, 225);
 strokeWeight(2);
 stroke(0, 0, 0);
 line(0, 199, 35, 221);
  
//Circulo cafe pequeño
 noStroke();
 fill(133, 84, 50);
 ellipse(106, -3, 12, 12);
  
//Medio circulo arriba
 stroke(0, 0, 0);
 strokeWeight(3);
 fill(179, 138, 61, 150);
 ellipse(70, -30, 90, 90);
 strokeWeight();
 fill(136, 156, 133, 180);
 ellipse(88, -8, 30, 30);
  
//Triangulo gris
 strokeWeight();
 fill(158, 146, 140);
 triangle(121, 0, 128, 12, 157,0);

//Linea izquierda triangulo gris
 strokeWeight(3);
 line(120, 0, 127, 12);
  
//Rectangulo negro abajo
 strokeWeight();
 fill(0, 0, 0);
 beginShape();
 vertex(239, 100);
 vertex(280, 71);
 vertex(299, 101);
 vertex(260, 130);
 endShape(CLOSE);

//Raya negra cuadrados negros
 strokeWeight(2);
 line(248, 23, 273, 60);
  
//Triangulo negro esquina
 strokeWeight(2);
 triangle(350, 0, 350, 5, 345, 0);
  
//Triangulo izquierdo
 strokeWeight();
 fill(0, 0, 0);
 triangle(0, 138, 0, 155, 7, 150);

//Medio circulo pequeño
 ellipse(-15, 265, 33, 33);

//Puntos triangulo gris
 strokeWeight(1);
 point(130, 8);
 point(132, 6);
 point(136, 5);
 point(143, 3);
 point(146, 1);
 point(127, 2);
 point(131, 2);
 point(133, 3);
 point(140, 2);

//Rayas cuadrados
 strokeWeight(1);
 line(87, 126, 100, 146);
 line(84, 128, 97, 148);
 line(81, 130, 94, 150);
 line(78, 132, 91, 152);
 line(75, 134, 88, 154);

 strokeWeight(2);
 line(17, 107, 31, 129);
 line(14, 109, 28, 131);
 line(11, 111, 25, 134);
 line(8, 113, 22, 136);
 line(4, 115, 19, 138);
 line(0, 117, 15, 140);
  
//Puntos cuadrado blanco
 strokeWeight(1);
 point(40, 128);
 point(43, 126);
 point(42, 124);
 point(49, 122);
 point(52, 120);
 point(53, 118);
 point(44, 132);
 point(45, 130);
 point(47, 128);
 point(52, 126);
 point(53, 124);
 point(55, 122);
 point(44, 136);
 point(47, 134);
 point(52, 132);
 point(54, 130);
 point(57, 128);
 point(63, 126);
 point(46, 140);
 point(49, 138);
 point(52, 136);
 point(55, 135);
 point(54, 133);
 point(61, 131);
 point(64, 129);
 point(49, 145);
 point(54, 143);
 point(55, 141);
 point(58, 139);
 point(65, 137);
 point(63, 135);
 point(67, 133);
 point(59, 123);
 point(59, 135);

//Puntos cuadrado blanco esquina
 strokeWeight(2);
 stroke(250, 250, 250);
 point(3, 18);
 point(7, 17);
 point(12, 15);
 point(13, 19);
 point(6, 23);
 point(12, 30);
 point(10, 24);
 point(15, 23);
 point(22, 20);
 point(22, 25);
 point(18, 13);
 point(18, 17);
 point(17, 28);
 point(8, 28);
 
 stroke(0, 0, 0);
 point(52, 98);
 point(57, 108); 
 point(67, 96);
 point(55, 93);
 point(58, 100);
 point(64, 90);
 point(60, 85);
 point(50, 92);
 point(54, 88);
 point(63, 104);
 point(70, 100);
 point(60, 95);
  
//Lineas negras encima de la roja
 strokeWeight(2);
 stroke(0, 0, 0);
 line(0, 341, 98, 268);
 line(0, 330, 98, 257);

//Sombras diagonal derecha
 noStroke();
 fill(30, 35, 47);
 beginShape();
 vertex(93, 259);
 vertex(111, 246);
 vertex(117, 256);
 vertex(102, 267);
 endShape(CLOSE);
 
 fill(45, 62, 61, 200);
 beginShape();
 vertex(112, 246);
 vertex(126, 235);
 vertex(130, 244);
 vertex(118, 254);
 endShape(CLOSE);
 
 fill(30, 35, 47);
 beginShape();
 vertex(127, 235);
 vertex(132, 230);
 vertex(137, 239);
 vertex(132, 242);
 endShape(CLOSE);
 
 fill(45, 62, 61, 200);
 beginShape();
 vertex(133, 230);
 vertex(148, 219);
 vertex(152, 226);
 vertex(138, 238);
 endShape(CLOSE);
 
 fill(30, 35, 47);
 beginShape();
 vertex(150, 218);
 vertex(174, 200);
 vertex(178, 208);
 vertex(154, 225);
 endShape(CLOSE);
 
 fill(45, 62, 6, 200);
 beginShape();
 vertex(176, 198);
 vertex(188, 188);
 vertex(193, 198);
 vertex(181, 206);
 endShape(CLOSE);
  
//Lineas negras encima sombras
 strokeWeight(2);
 stroke(0, 0, 0);
 line(98, 268, 350, 77);
 line(95, 260, 350, 66);

  

  

  



  



 
 
 
 
 


  
  
}