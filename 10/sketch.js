//var herramienta = 0;
//var boton1 = 70;
//var boton2 = 80;
//var boton3 = 100;

//var horizAlign = windowWidth/2;
//var vertAlign = 50;

var miImagen;
var miImagen1;

var laBala;
var lasBalas = [];

var elVenado;
var numVenados = 70;
var venadosMuertos;
var losVenados = [];

var puntaje = 0;

var colorFondo = 100;
var estado = 0;

var INTRO = 1;
var JUEGO = 2;
var OUTRO = 3;
var OUTRO2 = 4;
var millisecond;


function preload() {

  miImagen = loadImage("Pasto.jpg");
  miImagen1 = loadImage("cazador1.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  estado = INTRO; //si se cambia cambia el color 

  elVenado = new Venadito();

  laBala = new Balita(20, 20);

  for (var i = 0; i < numVenados; i = i + 1) {
    losVenados[i] = new Venadito();
  }
  
  for (var o = 0; o < venadosMuertos; o = o + 1) {
    losVenados[i] = losVenados[i].muertos();
    
  }

}

function draw() {

  var millisecond = millis();
  print(millisecond);
  image(miImagen, 0, 0);

  noStroke();

  //los diferentes momentos del juego
  if (estado == INTRO) {
    //background(0, 0, 0);
    fill(255);
    textAlign(CENTER);
    textSize(100);
    //text("INTRO", width / 2, height / 2);
    text("HUNTEER", width / 2, height / 2.2);
    textAlign(CENTER);
    textSize(25);
    text("Dispara la mayor cantidad de veces hasta que no haya más venados", width / 2, height / 1.8);
    textAlign(CENTER);
    textSize(25);
    text("Agita para empezar", width / 2, height / 1.5);
    
    
  } else if (estado == JUEGO) {
  
    
    if(millisecond > 15000 && puntaje<50) {
      estado = OUTRO2;
  }
    //background(colorFondo);
    
    //fill(255, 0, 0);
    //ellipse(boton1, windowHeight - boton3, boton2, boton2);
    
    fill(255);
    textAlign(CENTER);
    textSize(60);
    //text("JUEGO", width / 2, height / 2);
    
    for (var i = 0; i < numVenados; i = i + 1) {
      losVenados[i].dibujarse();
      losVenados[i].moverse();

      for (var a = 0; a < lasBalas.length; a = a + 1) {
        var distanciaCentro = dist(lasBalas[a].x, lasBalas[a].y, losVenados[i].x, losVenados[i].y);
       
        if(losVenados[i].viva==true)
        {
        if (distanciaCentro < 30) {
          losVenados[i].morir();
           puntaje=puntaje+1;
        }
        }
      }

    }
    
    image(miImagen1, mouseX - (miImagen1.width / 2), mouseY - (miImagen1.height / 2));
    laBala.dibujarse();
    laBala.moverse();

    for (var a = 0; a < lasBalas.length; a = a + 1) {
      lasBalas[a].dibujarse();
      lasBalas[a].moverse();

    }

    noStroke();
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text("VENADOS " + puntaje, 10, 30);

    if (puntaje == 70) {
      estado = OUTRO;
    }

  } else if (estado == OUTRO) {
    //background(200);
    fill(255);
    textAlign(CENTER);
    textSize(100);
    text("¡¡¡GANASTE!!!", width / 2, height / 2);
  }

  else if (estado == OUTRO2) {
    //background(200);
    fill(255);
    textAlign(CENTER);
    textSize(100);
    text("¡¡¡PERDISTE!!!", width / 2, height / 2);

    
    
  }
  
      
}

//function keyReleased() { // si suelta alguna tecla cambia de estado
function deviceShaken() {

  if (estado == INTRO) {
    //if (keyCode == ENTER) {
      estado = JUEGO;
    //}
  } else if (estado == JUEGO) {
    //estado = OUTRO;
  } else if (estado == OUTRO) {
    //estado = INTRO
  }

}

//function mousePressed() { //pasa muchas veces mientras tenga el mouse presionado
function doubleClicked() {

  if (estado == INTRO) {
    //estado = JUEGO;
  } else if (estado == JUEGO) {
   if (dist(mouseX, mouseY, elVenado.x, elVenado.y) < 20) {
      puntaje = puntaje + 1;
    }
    
    //if(mouseX > 20 && mouseX < 70 && mouseY > 80 && mouseY < windowHeight - 100) {
    //herramienta = 1;
    //}

    lasBalas[lasBalas.length] = new Balita(mouseX, mouseY);
    //puntaje = puntaje + 1;
    //estado = OUTRO;
  } else {
    //estado = INTRO

  }
}

    //if (herramienta == 1) {
    //noStroke();
    //fill(255, 0, 0);
    //ellipse(this.x, this.y, 10, 10);
    //7}



function mouseDragged() {

  if (estado == INTRO) {
    estado = JUEGO;
  } else if (estado == JUEGO) {
    colorFondo = map(mouseX, 0, width, 0, 255);

    if (dist(mouseX, mouseY, elVenado.x, elVenado.y) < 20) {
      elVenado.arrastrarse();
    }
  } else {

  }
}
//function mouseReleased() { //pasa solo cuando se hace click y se suelta, se acciona cuando se suelta el click


//}

function Balita(_x, _y) {

  this.x = _x;
  this.y = _y;

  this.dibujarse = function() {

    noStroke();
    fill(255, 0, 0);
    ellipse(this.x - 40, this.y + 13, 8, 8);

  }

  this.moverse = function() {

    this.x = this.x - 8;

  }


}


function Venadito() {
  this.x = random(0, width);
  this.y = random(100, height - 150);
  this.dirX = 1;
  this.dirY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      
      //ellipse(this.x, this.y, 48, 60);
      
      noStroke();
      fill(139, 94, 47);
      beginShape();
      vertex(this.x - 24, this.y - 20);
      vertex(this.x + 10 - 24, this.y + 11 - 20);
      vertex(this.x + 18 - 24, this.y + 42 - 20);
      vertex(this.x + 23 - 24, this.y + 47 - 20);
      vertex(this.x + 28 - 24, this.y + 42 - 20);
      vertex(this.x + 38 - 24, this.y + 12 - 20);
      vertex(this.x + 48 - 24, this.y - 20);
      vertex(this.x + 36 - 24, this.y + 3 - 20);
      vertex(this.x + 13 - 24, this.y + 3 - 20);
      endShape(CLOSE);

      fill(0, 0, 0);
      ellipse(this.x + 19 - 24, this.y + 18 - 20, 2, 2);
      ellipse(this.x + 28 - 24, this.y + 18 - 20, 2, 2);

      triangle(this.x + 18 - 24, this.y + 42 - 20, this.x + 23 - 24, this.y + 47 - 20, this.x + 28 - 24, this.y + 42 - 20);

      stroke(0, 0, 0);
      strokeWeight(3);
      line(this.x + 28  - 24, this.y + 4 - 20, this.x + 36 - 24, this.y - 8 - 20);
      line(this.x + 36  - 24, this.y - 8 - 20, this.x + 33 - 24, this.y - 13 - 20);
      line(this.x + 36 - 24, this.y - 8 - 20, this.x + 43 - 24, this.y - 13 - 20);
      line(this.x + 31 - 24, this.y - 20, this.x + 38 - 24, this.y - 20);

      line(this.x + 19 - 24, this.y + 4 - 20, this.x + 14 - 24, this.y - 8 - 20);
      line(this.x + 14 - 24, this.y - 8 - 20, this.x + 17 - 24, this.y - 13 - 20);
      line(this.x + 14 - 24, this.y - 8 - 20, this.x + 7 - 24, this.y - 13 - 20);
      line(this.x + 18 - 24, this.y + 1 - 20, this.x + 11 - 24, this.y - 3 - 20);

    }

  }

  this.moverse = function() {

    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 4);

    }

    if (this.y >= height / 2 || this.y <= height / 4) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 4);

    }

    this.x = this.x + (this.dirX * random(0, 2));
    this.y = this.y + (this.dirY * random(0, 2));

  }


  this.arrastrarse = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

  this.morir = function() {

    this.viva = false;
   

  }
  
  this.muertos = function() {

    this.viva = false;

  }

}

function touchMoved() {
  
  return false;
  
  } 

//function touchStarted()
//{
  //if(estado==OUTRO2)
  //{
    //estado=INTRO;
  //}
//else if(estado==OUTRO)
  //{
    //estado=INTRO;
  //}
//}
