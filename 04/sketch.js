//botones colores
var boton1x = 725;
var boton1y = 80;
var boton1tam= 50;

var boton2x= 725;
var boton2y= 20;
var boton2tam=50;

var boton3x= 725;
var boton3y= 140;
var boton3tam=50;

var boton4x= 725;
var boton4y= 200;
var boton4tam=50;

var boton5x= 725;
var boton5y= 260;
var boton5tam=50;

var boton6x= 725;
var boton6y= 320;
var boton6tam=50;

var boton7x= 725;
var boton7y= 380;
var boton7tam=50;

var boton8x= 725;
var boton8y= 440;
var boton8tam=50;

var boton9x= 725;
var boton9y= 500;
var boton9tam=50;

var boton10x= 725;
var boton10y= 560;
var boton10tam=50;

//botones herramientas
var botonCx= 60;
var botonCy= 35;
var botonCtam=30;

var botonC2x=60;
var botonC2y=65;
var botonC2tam=15;

var botonSqx=5;
var botonSqy=20;
var botonSqtam=30;

var botonSq2x=12;
var botonSq2y=57;
var botonSq2tam=15;


//variables
var herramienta=0;

var colorselect;

var size;

function setup() { 
  createCanvas(800, 620);
  background(230);
  noStroke();
  fill(200);
  rect(715,0,80,640);
  rect(0,0,80,640);
} 

function draw() { 
  
  fill(0,0,0);
  ellipse(botonCx,botonCy,botonCtam,botonCtam);
  ellipse(botonC2x,botonC2y,botonC2tam,botonC2tam);
  rect(botonSqx,botonSqy,botonSqtam,botonSqtam);
  rect(botonSq2x,botonSq2y,botonSq2tam,botonSq2tam);
  
  fill(56,100,200);
  rect(boton2x,boton2y,boton2tam,boton2tam);
  fill(128,0,255);
  rect(boton1x,boton1y,boton1tam,boton1tam);
  fill(200,56,100);
  rect(boton3x,boton3y,boton3tam,boton3tam);
  fill(250,128,0);
  rect(boton4x,boton4y,boton4tam,boton4tam);
  fill(255,255,0);
  rect(boton5x,boton5y,boton5tam,boton5tam);
  fill(128,255,0);
  rect(boton6x,boton6y,boton6tam,boton6tam);
  fill(0,255,0);
  rect(boton7x,boton7y,boton7tam,boton7tam);
  fill(0,255,128);
  rect(boton8x,boton8y,boton8tam,boton8tam);
  fill(0,255,255);
  rect(boton9x,boton9y,boton9tam,boton9tam);
  fill(0,128,255);
  rect(boton10x,boton10y,boton10tam,boton10tam);
  

  
  
  if(mouseIsPressed) {
    
    if(mouseX>botonSqx && mouseX<botonSqx+botonSqtam && mouseY>botonSqy && 
       mouseY<botonSqy+botonSqtam) {
      	herramienta=0;
      	size=0;
    }
    
    if(mouseX>botonSq2x && mouseX<botonSq2x+botonSq2tam && mouseY>botonSq2y && 
       mouseY<botonSq2y+botonSq2tam) {
      	herramienta=0;
      	size=1;
    }
    
    //configuracion colores
    if(mouseX>boton1x && mouseX<boton1x+boton1tam && mouseY>boton1y && 
       mouseY<boton1y+boton1tam) {
      colorselect=0;
    }
    
    if(mouseX>boton2x && mouseX<boton2x+boton2tam && mouseY>boton2y && 
       mouseY<boton2y+boton2tam) {
      colorselect=1;
    }
  
    if(mouseX>boton3x && mouseX<boton3x+boton3tam && mouseY>boton3y && 
       mouseY<boton3y+boton3tam) {
      colorselect=2;
    }
    
    if(mouseX>boton4x && mouseX<boton4x+boton4tam && mouseY>boton4y && 
       mouseY<boton4y+boton4tam) {
      colorselect=3;
    }
    
    if(mouseX>boton5x && mouseX<boton5x+boton5tam && mouseY>boton5y && 
       mouseY<boton5y+boton5tam) {
      colorselect=4;
    }
		
     if(mouseX>boton6x && mouseX<boton6x+boton6tam && mouseY>boton6y && 
       mouseY<boton6y+boton6tam) {
      colorselect=5;
    }
    
     if(mouseX>boton7x && mouseX<boton7x+boton7tam && mouseY>boton7y && 
       mouseY<boton7y+boton7tam) {
      colorselect=6;
    }
    
     if(mouseX>boton8x && mouseX<boton5x+boton8tam && mouseY>boton8y && 
       mouseY<boton8y+boton8tam) {
      colorselect=7;
    }
    
     if(mouseX>boton9x && mouseX<boton9x+boton9tam && mouseY>boton9y && 
       mouseY<boton9y+boton9tam) {
      colorselect=8;
    }
    
     if(mouseX>boton10x && mouseX<boton10x+boton10tam && mouseY>boton10y && 
       mouseY<boton10y+boton10tam) {
      colorselect=9;
    }
    
    //configuracion tamano
    if(mouseX>botonCx && mouseX<botonCx+botonCtam && mouseY>botonCy && 
       mouseY<botonCy+botonCtam) {
      herramienta=1;
      size=0;
    }
    
    if(mouseX>botonC2x && mouseX<botonC2x+botonC2tam && mouseY>botonC2y && 
       mouseY<botonC2y+botonC2tam) {
      herramienta=1;
      size=1;
    }
    if (colorselect==0){
  		fill(128,0,255);
    }
    
    if (colorselect==1){
   		fill(56,100,200);
    }
  	
    if (colorselect==2){
   		 fill(200,56,100);
    }
    
    if (colorselect==3){
   		fill(250,128,0);
    }
    
    if (colorselect==4){
   		fill(255,255,0);
    }
    
    if (colorselect==5){
   		fill(128,255,0);
    }
    
    if (colorselect==6){
   		fill(0,255,0);
    }
    
    if (colorselect==7){
   		fill(0,255,128);
    }
    
    if (colorselect==8){
   		fill(0,255,255);
    }
    
    if (colorselect==9){
   		fill(0,128,255);
    }
    
     if (herramienta==0 && size==0){
      rect(mouseX-10,mouseY-10,20,20);
    }
    
    if (herramienta==0 && size==1){
      rect(mouseX-5,mouseY-5,10,10);
    }
    
    if (herramienta==1 && size==0){
      ellipse(mouseX,mouseY,20,20);
    }
    
    if(herramienta==1 && size==1){
      ellipse(mouseX,mouseY,10,10);
    }
  }
}

