var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);

    //create 4 different surfaces
surface1=createSprite(80,600,150,30);
surface1.shapeColor=rgb(0,0,169);

surface2=createSprite(270,600,150,30);
surface2.shapeColor=rgb(169,109,0);

surface3=createSprite(460,600,150,30);
surface3.shapeColor=rgb(169,0,150);

surface4=createSprite(650,600,150,30);
surface4.shapeColor=rgb(169,109,0);

    //create box sprite and give velocity
box=createSprite(random(20,700),30,30,30,30)
box.shapeColor=rgb(250,250,250)
box.velocityY= 5
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor=rgb(0,0,169)
        box.velocityY=0
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor=rgb(169,109,0)
        box.velocityY=0
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor=rgb(169,0,150)
        box.velocityY=0
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor=rgb(169,109,0);
        box.velocityY=0
    }
    drawSprites();
}
