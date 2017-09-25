var boton1estrella = 40;
var boton2estrella = 45;
var boton3estrella = 50;
var boton4estrella = 55;
var boton5estrella = 60;
var boton6estrella = 65;
var boton7estrella = 70;
var boton8estrella = 80

var boton1pez = 43;
var boton2pez = 50;
var boton3pez = 58;
var boton4pez = 77;
var boton5pez = 82;
var boton6pez = 87;
var boton7peztamaño = 9;
var boton8peztamaño = 20;

var boton1octagono = 42;
var boton2octagono = 50;
var boton3octagono = 60;
var boton4octagono = 68;
var boton5octagono = 94;
var boton6octagono = 100;
var boton7octagono = 108;
var boton8octagono = 114;

var boton1reloj = 45;
var boton2reloj = 55;
var boton3reloj = 65;
var boton4reloj = 122;
var boton5reloj = 132;
var boton6reloj = 142;

var boton1casa = 40;
var boton2casa = 45;
var boton3casa = 52;
var boton4casa = 58;
var boton5casa = 65;
var boton6casa = 70;
var boton7casa = 150;
var boton8casa = 155;
var boton9casa = 160;
var boton10casa = 170;

var boton1flor = 48;
var boton2flor = 55;
var boton3flor = 62;
var boton4flor = 183;
var boton5flor = 190;
var boton6flor = 195;
var boton7flortamaño = 12;
var boton8flortamaño = 6;

var boton1rombo = 45;
var boton2rombo = 55;
var boton3rombo = 65;
var boton4rombo = 208;
var boton5rombo = 220;
var boton6rombo = 232;

var boton1acordeon = 42;
var boton2acordeon = 48;
var boton3acordeon = 52;
var boton4acordeon = 56;
var boton5acordeon = 60;
var boton6acordeon = 64;
var boton7acordeon = 69;
var boton8acordeon = 238;
var boton9acordeon = 246;
var boton10acordeon = 248;
var boton11acordeon = 250;
var boton12acordeon = 258;

var boton1sombrero = 40;
var boton2sombrero = 47;
var boton3sombrero = 50;
var boton4sombrero = 53;
var boton5sombrero = 57;
var boton6sombrero = 60;
var boton7sombrero = 63;
var boton8sombrero = 70;
var boton9sombrero = 263;
var boton10sombrero = 269;
var boton11sombrero = 275;
var boton12sombrero = 283;

var boton1asterisco = 40;
var boton2asterisco = 55;
var boton3asterisco = 69;
var boton4asterisco = 290;
var boton5asterisco = 280;
var boton6asterisco = 300;
var boton7asterisco = 310;

var boton1background = 39;
var boton2background = 315;
var boton3backgroundtamaño = 31;
var boton4backgroundtamaño = 23;

var herramienta = 0;
var colorSelect = 0;
var tamaño = 0;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255, 255, 255);

}

function draw() {
 
  noStroke();
  fill(250,196,0);
  beginShape();
  vertex(boton4estrella, boton1estrella);
  vertex(boton5estrella - 1, boton3estrella);
  vertex(boton7estrella, boton3estrella + 1);
  vertex(boton5estrella + 1, boton4estrella + 3);
  vertex(boton6estrella, boton7estrella);
  vertex(boton4estrella, boton5estrella + 2);
  vertex(boton2estrella, boton7estrella);
  vertex(boton3estrella - 1, boton4estrella + 3);
  vertex(boton1estrella, boton3estrella + 1);
  vertex(boton3estrella + 1, boton3estrella);
  endShape(CLOSE);
  noFill();
  stroke(0);
  rect(39, 38, 31, 33);
  
  noStroke();  
  fill(245, 68, 0);
  ellipse(boton3pez, boton5pez, boton8peztamaño, boton7peztamaño);
  triangle(boton2pez, boton5pez, boton1pez, boton4pez, boton1pez, boton6pez);
  noFill();
  stroke(0);
  rect(39, 71, 31, 20);
  
  noStroke();
  fill(201, 0, 12);
  beginShape();
  vertex(boton2octagono, boton5octagono);
  vertex(boton3octagono, boton5octagono);
  vertex(boton4octagono, boton6octagono);
  vertex(boton4octagono, boton7octagono);
  vertex(boton3octagono, boton8octagono);
  vertex(boton2octagono, boton8octagono);
  vertex(boton1octagono, boton7octagono);
  vertex(boton1octagono, boton6octagono);
  endShape(CLOSE);
  noFill();
  stroke(0);
  rect(39, 91, 31, 25);
  
  noStroke();
  fill(216, 73, 84);
  triangle(boton1reloj, boton4reloj, boton3reloj, boton4reloj, boton2reloj, boton5reloj);
  triangle(boton1reloj, boton6reloj, boton3reloj, boton6reloj, boton2reloj, boton5reloj);
  noFill();
  stroke(0);
  rect(39, 116, 31, 30);
  
  noStroke();
  fill(84, 70, 143);
  beginShape();
  vertex(boton1casa, boton8casa);
  vertex(boton2casa, boton7casa);
  vertex(boton5casa, boton7casa);
  vertex(boton6casa, boton8casa);
  vertex(boton5casa, boton8casa);
  vertex(boton5casa, boton10casa);
  vertex(boton4casa, boton10casa);
  vertex(boton4casa, boton9casa);
  vertex(boton3casa, boton9casa);
  vertex(boton3casa, boton10casa);
  vertex(boton2casa, boton10casa);
  vertex(boton2casa, boton8casa);
  vertex(boton1casa, boton8casa);
  endShape(CLOSE);
  noFill();
  stroke(0);
  rect(39, 146, 31, 27);
  
  noStroke();
  fill(53, 102, 169); 
  ellipse(boton2flor, boton4flor, boton7flortamaño, boton7flortamaño);
  ellipse(boton3flor, boton5flor, boton7flortamaño, boton7flortamaño);
  ellipse(boton2flor, boton6flor, boton7flortamaño, boton7flortamaño);
  ellipse(boton1flor, boton5flor, boton7flortamaño, boton7flortamaño);
  fill(100, 159, 214);
  ellipse(boton2flor, boton5flor, boton8flortamaño, boton8flortamaño);
  noFill();
  stroke(0);
  rect(39, 173, 31, 31);

  noStroke();
  fill(109, 176, 23);
  beginShape();
  vertex(boton2rombo, boton4rombo);
  vertex(boton3rombo, boton5rombo);
  vertex(boton2rombo, boton6rombo);
  vertex(boton1rombo, boton5rombo);
  endShape(CLOSE);
  noFill();
  stroke(0);
  rect(39, 204, 31, 30);
  
  noStroke();
  fill(57, 140, 49);
  beginShape();
  vertex(boton1acordeon, boton10acordeon);
  vertex(boton2acordeon, boton8acordeon);
  vertex(boton3acordeon, boton9acordeon);
  vertex(boton4acordeon, boton8acordeon);
  vertex(boton5acordeon, boton9acordeon);
  vertex(boton6acordeon, boton8acordeon);
  vertex(boton7acordeon, boton10acordeon);
  vertex(boton6acordeon, boton12acordeon);
  vertex(boton5acordeon, boton11acordeon);
  vertex(boton4acordeon, boton12acordeon);
  vertex(boton3acordeon, boton11acordeon);
  vertex(boton2acordeon, boton12acordeon);
  vertex(boton1acordeon, boton10acordeon);
  endShape(CLOSE);
  noFill();
  stroke(0);
  rect(39, 234, 31, 26);
  
  noStroke();
  fill(106, 106, 106);
  beginShape();
  vertex(boton4sombrero, boton9sombrero);
  vertex(boton5sombrero, boton9sombrero);
  vertex(boton6sombrero, boton10sombrero);
  vertex(boton7sombrero, boton11sombrero);
  vertex(boton8sombrero, boton11sombrero);
  vertex(boton8sombrero, boton12sombrero);
  vertex(boton1sombrero, boton12sombrero);
  vertex(boton1sombrero, boton11sombrero);
  vertex(boton2sombrero, boton11sombrero);

  endShape(CLOSE);
  noFill();
  stroke(0);
  rect(39, 260, 31, 26);
  
  stroke(0, 0, 0);
  strokeWeight(1);
  line(boton2asterisco, boton4asterisco, boton2asterisco, boton7asterisco);
  line(boton1asterisco, boton6asterisco, boton3asterisco, boton6asterisco);
  line(boton1asterisco, boton4asterisco, boton3asterisco, boton7asterisco);
  line(boton1asterisco, boton7asterisco, boton3asterisco, boton4asterisco);
  noFill();
  stroke(0);
  rect(39, 286, 31, 29);
  
  fill(255, 255, 255);
  strokeWeight(1);
  rect(boton1background, boton2background, boton3backgroundtamaño, boton4backgroundtamaño);

  if(mouseIsPressed) 
  {

//Estrella
   
  if(mouseX > 39 && mouseX < 71 && mouseY > 40 && mouseY < 70)
  {
  herramienta = 1;
  }
    
//Pez
    
  if(mouseX > 39 && mouseX < 71 && mouseY > 70 && mouseY < 90)
  {
  herramienta = 2;
  }
    
//Octagono
    
  if(mouseX > 39 && mouseX < 71 && mouseY > 90 && mouseY < 116)
  {
  herramienta = 3;
  }
    
//Reloj
    
  if(mouseX > 39 && mouseX < 71 && mouseY > 116 && mouseY < 147)
  {
  herramienta = 4;
  }
    
//Casa
  
  if(mouseX > 39 && mouseX < 71 && mouseY > 147 && mouseY < 173)
  {
  herramienta = 5;
  }

//Flor
    
  if(mouseX > 39 && mouseX < 71 && mouseY > 173 && mouseY < 204)
  {
  herramienta = 6;
  }

//Rombo
    
  if(mouseX > 39 && mouseX < 71 && mouseY > 204 && mouseY < 234)
  {
  herramienta = 7;
  }
    
//Acordeon
    
 if(mouseX > 39 && mouseX < 71 && mouseY > 234 && mouseY < 260)
  {
  herramienta = 8;
  }
  
//Sombrero
    
  if(mouseX > 39 && mouseX < 71 && mouseY > 260 && mouseY < 286)
  {
  herramienta = 9;
  }
    
//Asterisco
    
 if(mouseX > 39 && mouseX < 71 && mouseY > 286 && mouseY < 315)
  {
  herramienta = 10;
  }
  
//Fondo
    
  if(mouseX > 39 && mouseX < 71 && mouseY > 318 && mouseY < 338)
  {
  background(255, 255, 255);
  } 
    
  } 

//Estrella
   
  if (colorSelect == 0){
  noStroke();
  fill(250,196,0);
  }
  
  if (herramienta == 1) {
  fill(250,196,0);
  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX + 4, mouseY + 10);
  vertex(mouseX + 15, mouseY + 11);
  vertex(mouseX + 5, mouseY + 16);
  vertex(mouseX + 10, mouseY + 30);
  vertex(mouseX, mouseY + 20);
  vertex(mouseX - 10, mouseY + 30);
  vertex(mouseX - 4, mouseY + 16);
  vertex(mouseX - 15, mouseY + 11);
  vertex(mouseX - 4, mouseY + 10);
  endShape(CLOSE);
  }

//Pez
  
  if (colorSelect == 0){
  noStroke();
  fill(245, 68, 0);
  }
  
  if (herramienta == 2) {
  triangle(mouseX, mouseY, mouseX - 7, mouseY - 5, mouseX - 7, mouseY + 5);
  ellipse(mouseX + 8, mouseY, boton8peztamaño, boton7peztamaño);
  tamaño = tamaño + 100;
  }
  

//Octagono
  
  if (colorSelect == 0){
  noStroke();
  fill(201, 0, 12);
  } 
    
  if (herramienta == 3) {
  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX + 10, mouseY);
  vertex(mouseX + 18, mouseY + 6);
  vertex(mouseX + 18, mouseY + 10);
  vertex(mouseX + 18, mouseY + 4);
  vertex(mouseX + 18, mouseY + 14);
  vertex(mouseX + 10, mouseY + 20);
  vertex(mouseX, mouseY + 20);
  vertex(mouseX - 8, mouseY + 14);
  vertex(mouseX - 8, mouseY + 6);
  endShape(CLOSE);
  }
  
//Reloj
  
  if (colorSelect == 0){
  noStroke();
  fill(216, 73, 84);
  } 
  
  if (herramienta == 4) {
  triangle(mouseX, mouseY, mouseX + 20, mouseY, mouseX + 10, mouseY + 10);
  triangle(mouseX + 20, mouseY + 20, mouseX + 10, mouseY + 10, mouseX, mouseY + 20);
  }
  
//Casa
  
  if (colorSelect == 0){
  noStroke();
  fill(84, 70, 143);
  } 
  
  if (herramienta == 5) {
  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX + 5, mouseY - 5);
  vertex(mouseX + 25, mouseY - 5);
  vertex(mouseX + 30, mouseY);
  vertex(mouseX + 25, mouseY);
  vertex(mouseX + 25, mouseY + 20);
  vertex(mouseX + 18, mouseY + 20);
  vertex(mouseX + 18, mouseY + 10);
  vertex(mouseX + 12, mouseY + 10);
  vertex(mouseX + 12, mouseY + 20);
  vertex(mouseX + 5, mouseY + 20);
  vertex(mouseX + 5, mouseY); 
  vertex(mouseX, mouseY);
  endShape(CLOSE);
  }
  
//Flor 
  
  if (herramienta == 6) {
  fill(53, 102, 169); 
  ellipse(mouseX, mouseY - 7, boton7flortamaño, boton7flortamaño);
  ellipse(mouseX + 7, mouseY, boton7flortamaño, boton7flortamaño);
  ellipse(mouseX, mouseY + 5, boton7flortamaño, boton7flortamaño);
  ellipse(mouseX - 7, mouseY, boton7flortamaño, boton7flortamaño);
  fill(100, 159, 214);
  ellipse(mouseX, mouseY, boton8flortamaño, boton8flortamaño);
  }
  
//Rombo
  
  if (colorSelect == 0){
  noStroke();
  fill(109, 176, 23);
  } 
  
  if (herramienta == 7) {
  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX + 10, mouseY + 12);
  vertex(mouseX, mouseY + 24);
  vertex(mouseX - 10, mouseY + 12);
  endShape(CLOSE);
  }
  
//Arcordeon
  
  if (colorSelect == 0){
  noStroke();
  fill(57, 140, 49);
  } 
  
  if (herramienta == 8) {
  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX + 4, mouseY - 10);
  vertex(mouseX + 10, mouseY - 2);
  vertex(mouseX + 14, mouseY - 10);
  vertex(mouseX + 18, mouseY - 2);
  vertex(mouseX + 22, mouseY - 10);
  vertex(mouseX + 27, mouseY);
  vertex(mouseX + 22, mouseY + 10);
  vertex(mouseX + 18, mouseY + 2);
  vertex(mouseX + 14, mouseY + 10);
  vertex(mouseX + 10, mouseY + 2);
  vertex(mouseX + 4, mouseY + 10);
  endShape(CLOSE);
  }
  
//Sombrero
  
  if (colorSelect == 0){
  noStroke();
  fill(106, 106, 106);
  } 
  
  if (herramienta == 9) {
  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX + 4, mouseY);
  vertex(mouseX + 10, mouseY + 12);
  vertex(mouseX + 17, mouseY + 12);
  vertex(mouseX + 17, mouseY + 20);
  vertex(mouseX - 13, mouseY + 20);
  vertex(mouseX - 13, mouseY + 12);
  vertex(mouseX - 6 , mouseY + 12);
  endShape(CLOSE);
  }
  
//Asterisco
  
  if (colorSelect == 0){
  strokeWeight(1);
  stroke(0, 0, 0);
  } 
  
  if (herramienta == 10) {
  line(mouseX, mouseY, mouseX, mouseY + 20);
  line(mouseX - 15, mouseY + 10, mouseX + 14, mouseY + 10);
  line(mouseX - 15, mouseY, mouseX + 14, mouseY + 20);
  line(mouseX - 15, mouseY + 20, mouseX + 14, mouseY);
  }

}