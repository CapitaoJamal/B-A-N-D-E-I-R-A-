var img;
var x;
var y;
var w;
var h;
var bolinhas = [];

function setup(){
    img = loadImage('Estoni19.jpg');
    createCanvas(innerWidth,innerHeight);
    
    bolinha={
        x:width/2,
        y:height/2,
        w:300,
        h:300,
        cor:color(134,119,168),
        
    }
    
    bolinhas.push(bolinha);
  
}
function draw(){
    for(i=0;i<bolinhas.length;i++){
        b=bolinhas[i];  
        fill(b.cor);
        ellipse(b.x,b.y,b.w,b.h);
        
    }
   
    
}