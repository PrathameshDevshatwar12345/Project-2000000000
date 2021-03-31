//create global variables here
var tom;
var jerry;

var tomrest_img,tomwalk_img,tomhappy_img;
var jerryrest_img,jerrytease_img,jerryhappy_img;

var background1,background1_img;

function preload() {
    //load the images here
    tomrest_img=loadImage("cat1.png");
    jerryrest_img=loadImage("mouse1.png");

    tomwalk_img=loadImage("cat2.png","cat3.png");
    jerrytease_img=loadImage("mouse2.png","mouse3.png");

    tomhappy_img=loadImage("cat4.png");
    jerryhappy_img=loadImage("mouse4.png");

    background1_img=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

    background1=createSprite(500,400,1000,800);
    background1.addImage("forest",background1_img);
    background1.scale=1.0;
    
    //create tom and jerry sprites here
    tom=createSprite()
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
