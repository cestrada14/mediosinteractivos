var elTigre;
var losTigres= [];
var numTigres = 1;

var elVenado;
var losVenados = [];
var numVenados = 6;

var elArbusto;
var losArbustos = [];
var numArbustos = 12;

var elPato;
var losPatos = [];
var numPatos = 3;

var elPez;
var losPeces = [];
var numPeces = 20;


function setup() { 
  createCanvas(700, 400);
  
  //elTigre = new Tigrecito();
  for(var i = 0; i < numTigres; i = i + 1) {
  losTigres[i] = new Tigrecito();
  }
  
  //elVenado = new Venadito();
  for(var a = 0; a < numVenados; a = a + 1) {
  losVenados[a] = new Venadito(); 
  }
  
  //elArbusto = new Arbustico();
  for(var e = 0; e < numArbustos; e = e + 1) {
  losArbustos[e] = new Arbustico();
  }
  
  //elPato = new Patico();
  for(var o = 0; o < numPatos; o = o + 1) {
  losPatos[o] = new Patico();
  }
  
  //elPez = new Pececito();
  for(var u = 0; u < numPeces; u = u + 1) {
  losPeces[u] = new Pececito();
  }
  
  } 

function draw() { 
  background(210, 238, 245);
  
//Nubes
  
  noStroke();
  fill(250, 250, 250);
  ellipse(90, 50, 80, 40);
  ellipse(70, 60, 80, 40);
  ellipse(105, 65, 80, 40);
  
  ellipse(350, 90, 80, 40);
  ellipse(330, 100, 80, 40);
  ellipse(365, 105, 80, 40);
  
  ellipse(620, 30, 80, 40);
  ellipse(600, 40, 80, 40);
  ellipse(635, 45, 80, 40);
  
//Agua
  
  noStroke();
  fill(22, 138, 231);
  rect(0, 300, 700, 100);
  
//Tierra
  
  fill(43, 122, 73);
  //fill(255, 255, 255);
  rect(0, 150, 700, 150);
  
//Arbusto
  
  for(var e = 0; e < numArbustos; e = e + 1) {
  losArbustos[e].dibujarse();
  
//Venado come arbustos

  for(var a = 0; a < numVenados; a = a + 1) {
  var distanCentro = dist(losVenados[a].x, losVenados[a].y, losArbustos[e].x, losArbustos[e].y);

  if (distanCentro < losVenados[a].x/25) {
  losArbustos[e].morir();
  }
    
  }
    
  }
  //fill(49, 130, 80);
  //fill(251, 207, 72);
  //beginShape();
  //vertex(30, 240);
  //vertex(65, 240);
  //vertex(75, 200);
  //vertex(65, 220);
  //vertex(63, 190);
  //vertex(55, 220);
  //vertex(50, 200);
  //vertex(47, 220);
  //vertex(40, 190);
  //vertex(38, 220);
  //vertex(28, 195);
  //vertex(29, 220);
  //vertex(17, 205);
  //endShape(CLOSE);
  
//Tigre
  
  for(var i = 0; i < numTigres; i = i + 1) {
  losTigres[i].dibujarse();
  losTigres[i].moverse();
  }

//Venado
  
  for(var a = 0; a < numVenados; a = a + 1) {
  losVenados[a].dibujarse();
  losVenados[a].moverse();
  
//Tigre come venados

  for(var i = 0; i < numTigres; i = i + 1) {
  var distanciaCentro = dist(losTigres[i].x, losTigres[i].y, losVenados[a].x, losVenados[a].y);

  if(distanciaCentro < losTigres[i].x/30) {
  losVenados[a].morir();
  }
    
  }
    
  }
  
//Pez
  
  //elPez.dibujarse();
  //elPez.moverse();
  
  for (var u = 0; u < numPeces; u = u + 1) {
  losPeces[u].dibujarse();
  losPeces[u].moverse();
 
  
  //noStroke();
  //fill(237, 65, 9);
  //ellipse(50, 350, 25, 12);
  //triangle(38, 350, 28, 342, 28, 358);
  //fill(0, 0, 0);
  //ellipse(58, 349, 2, 2);
  
//Pato come peces
    
  for(var o = 0; o < numPatos; o = o + 1) {
  var disCentro = dist(losPatos[o].x, losPatos[o].y, losPeces[u].x, losPeces[u].y);

  if (disCentro < losPatos[o].x/30) {
  losPeces[u].morir();
  }
    
  }
    
  }
    
//Pato
  
  for(var o = 0; o < numPatos; o = o + 1) {
  losPatos[o].dibujarse();
  losPatos[o].moverse();
  }
  
  //fill(255, 255, 120);
  //beginShape();
  //vertex(23, 295);
  //vertex(33, 310);
  //vertex(63, 310);
  //vertex(73, 295);
  //vertex(73, 275);
  //vertex(83, 275);
  //vertex(83, 265);
  //vertex(65, 265);
  //vertex(65, 280);
  //vertex(23, 280);
  //endShape(CLOSE);
  
  //fill(250, 178, 37);
  //beginShape();
  //vertex(83, 275);
  //vertex(90, 275);
  //vertex(90, 270);
  //vertex(83, 270);
  //endShape(CLOSE);
  
  //fill(0, 0, 0);
  //ellipse(79, 268, 2, 2);
  
  }

//Arbusto

function Arbustico () {
  this.x = random(0, 650);
  this.y = random(150, 300);
  this.dirX = 1;
  this.dirY = 1;
  this.viva = true;
  
  this.dibujarse = function() {
  if (this.viva == true) {
  noStroke();
  fill(59, 150, 90);
  beginShape();
  vertex(this.x, this.y);
  vertex(this.x + 35, this.y);
  vertex(this.x + 45, this.y - 40);
  vertex(this.x + 35, this.y - 20);
  vertex(this.x + 33, this.y - 50);
  vertex(this.x + 25, this.y - 20);
  vertex(this.x + 20, this.y - 40);
  vertex(this.x + 17, this.y - 20);
  vertex(this.x + 10, this.y - 50);
  vertex(this.x + 8, this.y - 20);
  vertex(this.x - 2, this.y - 45);
  vertex(this.x - 1, this.y - 20);
  vertex(this.x - 13, this.y - 35);
  endShape(CLOSE);
  }
    
  }
  
  this.morir = function() {
  this.viva = false;
    
  }
  
  }
  
// Tigre 

function Tigrecito() {
  this.x = random(0, 650); 
  this.y = random(150, 200);
  this.dirX = 1;
  this.dirY = 1;
  
  this.dibujarse = function() {
  noStroke();
  fill(186, 186, 186);
  beginShape();
  vertex(this.x, this.y);
  vertex(this.x + 5, this.y + 15);
  vertex(this.x + 9, this.y + 30);
  vertex(this.x + 17, this.y + 33);
  vertex(this.x + 41, this.y + 33);
  vertex(this.x + 49, this.y + 30);
  vertex(this.x + 53, this.y + 15);
  vertex(this.x + 58, this.y);
  vertex(this.x + 40, this.y - 15);
  vertex(this.x + 18, this.y - 15);
  endShape(CLOSE);
  
  fill(215, 218, 219);
  triangle(this.x + 37, this.y - 5, this.x + 47, this.y + 4, this.x + 51, this.y - 9);
  triangle(this.x + 7, this.y - 9, this.x + 12, this.y + 3, this.x + 21, this. y - 5);
  
  beginShape();
  vertex(this.x + 22, this.y - 5);
  vertex(this.x + 12, this.y + 5);
  vertex(this.x + 20, this.y + 25);
  vertex(this.x + 37, this.y + 25);
  vertex(this.x + 46, this.y + 5);
  vertex(this.x + 35, this.y - 5);
  endShape(CLOSE);
  
  fill(0, 0, 0);
  ellipse(this.x + 24, this.y + 5, 2, 2);
  ellipse(this.x + 34, this.y + 5, 2, 2);
  
  triangle(this.x + 22, this.y + 13, this.x + 37, this.y + 13, this.x + 29, this.y + 18); 
    
  }
    
  this.moverse = function() {
      
  if (this.x >= 650 || this.x <= 0) {
  this.dirX = -this.dirX;
  this.x = this.x + (this.dirX*4);   
  }
  
  if (this.y >= 260 || this.y <= 130) {
  this.dirY = -this.dirY;
  this.y = this.y + (this.dirY*4);  
  }

  this.x = this.x + (this.dirX*random(0, 4));
  this.y = this.y + (this.dirY*random(0, 4));
  }
    
  }

//Venado

function Venadito() {
  this.x = random(0, width);
  this.y = random(100, height - 150);
  this.dirX = 1;
  this.dirY = 1;
  this.viva = true;

  this.dibujarse = function() {
  if(this.viva == true){
  noStroke();
  fill(139, 94, 47);
  beginShape();
  vertex(this.x, this.y);
  vertex(this.x + 10, this.y + 11);
  vertex(this.x + 18, this.y + 42);
  vertex(this.x + 23, this.y + 47);
  vertex(this.x + 28, this.y + 42);
  vertex(this.x + 38, this.y + 12);
  vertex(this.x + 48, this.y);
  vertex(this.x + 36, this.y + 3);
  vertex(this.x + 13, this.y + 3);
  endShape(CLOSE);
  
  fill(0, 0, 0);
  ellipse(this.x + 19, this.y + 18, 2, 2);
  ellipse(this.x + 28, this.y + 18, 2, 2);
  
  triangle(this.x + 18, this.y + 42, this.x + 23, this. y + 47, this.x + 28, this.y + 42);
  
  stroke(0, 0, 0);
  strokeWeight(3);
  line(this.x + 28, this.y + 4, this.x + 36, this.y - 8);
  line(this.x + 36, this.y - 8, this.x + 33, this.y - 13);
  line(this.x + 36, this.y - 8, this.x + 43, this.y - 13);
  line(this.x + 31, this.y, this.x + 38, this.y - 2);
  
  line(this.x + 19, this.y + 4, this.x + 14, this.y - 8);
  line(this.x + 14, this.y - 8, this.x + 17, this.y - 13);
  line(this.x + 14, this.y - 8, this.x + 7, this.y - 13);
  line(this.x + 18, this.y + 1, this.x + 11, this.y - 3);
    
  }
    
  }
  
  this.moverse = function() {
      
  if (this.x >= 650 || this.x <= 0) {
  this.dirX = -this.dirX;
  this.x = this.x + (this.dirX*4);
      
  }
    
  if (this.y >= 260 || this.y <= 130) {
  this.dirY = -this.dirY;
  this.y = this.y + (this.dirY*4);
     
  }

  this.x = this.x + (this.dirX*random(0, 2));
  this.y = this.y + (this.dirY*random(0, 2));
  
  }
  
  
  this.morir = function() {
  this.viva = false;
    
  }
  }

//Nacen venados

function keyReleased() {
 
  if (keyCode == 13) {
  numVenados = numVenados + 1;
  losVenados[losVenados.length] = new Venadito();
  }
  }
  
//Pato
  
function Patico () {
  this.x = random(0, width);
  this.y = random(300, height - 30);
  this.dirX = 1;
  this.dirY = 1;
  
  this.dibujarse = function() {
  noStroke();
  fill(255, 255, 120);
  beginShape();
  vertex(this.x, this.y);
  vertex(this.x + 10, this.y + 15);
  vertex(this.x + 40, this.y + 15);
  vertex(this.x + 50, this.y);
  vertex(this.x + 50, this.y - 20);
  vertex(this.x + 60, this.y - 20);
  vertex(this.x + 60, this.y - 30);
  vertex(this.x + 42, this.y - 30);
  vertex(this.x + 42, this.y - 15);
  vertex(this.x, this.y - 15);
  endShape(CLOSE);
  
  fill(250, 178, 37);
  beginShape();
  vertex(this.x + 60, this.y - 20);
  vertex(this.x + 67, this.y - 20);
  vertex(this.x + 67, this.y - 25);
  vertex(this.x + 60, this.y - 25);
  endShape(CLOSE);
    
  fill(0, 0, 0);
  ellipse(this.x + 56, this.y - 27, 2, 2);
    
  }
  
  this.moverse = function() {
  this.x = this.x + (3 * (this.dirX));
  if(this.x > width + 40  || this.x < -60){
  this.x = - 40;
  }
    
  this.y = this.y + (1 * this.dirY);
  if(this.y > height - 30 || this.y < 350){
  this.dirY = -this.dirY;
  }
  
  }
  
  }  

//Pez
  
function Pececito () {
  this.x = random(0, width);
  this.y = random(320, height - 30);
  this.dirX = 1;
  this.dirY = 1;
  this.viva = true;
  
  this.dibujarse = function() {
  if(this.viva == true){
  noStroke();
  fill(237, 65, 9);
  ellipse(this.x, this.y, 25, 12);
  triangle(this.x + 13, this.y, this.x + 22, this.y - 8, this.x + 22, this.y + 8);
  fill(0, 0, 0);
  ellipse(this.x - 8, this.y - 1, 2, 2);
  }
    
  }
  
  this.moverse = function() {
  this.x = this.x + (3 * (-this.dirX));
  if(this.x > width + 40 || this.x < -60){
  this.x = width + 40;
  }
    
  this.y = this.y + (1 * this.dirY);
  if(this.y > height - 30 || this.y < 350){
  this.dirY = -this.dirY;
  }
    
  }

  this.morir = function(){
  this.viva = false;
  }
  
  }

//Arrastrar peces

function mouseDragged () {
  
  for(var u = 0; u < numPeces; u ++) {
    
  if(dist(mouseX, mouseY, losPeces[u].x, losPeces[u].y)) {
  
  losPeces[u].arrastrar();
    
    
  }
  }
  
  this.arrastrar = function() {
  this.x = mouseX;
  this.y = mouseY;
  }
  
  }

//Lazar peces

function mouseDragged() {
  
  if(frameCount % 10 != 0) {
  return;
  }
  
  var x1 = mouseX;
  var y1 = mouseY; 
  
  var x2 = pmouseX;
  var y2 = pmouseY;
  
  var velx = x1 - x2; 
  var vely = y1 - y2;
  
  losPeces[numPeces] = new Pececito(velx, vely);
  
  //numPeces++; 
  
  }
