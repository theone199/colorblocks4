var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound('music.mp3');
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510, 580,200,30);
    block3.shapeColor = 'red';

    block4 = createSprite(730, 580,200,30);
    block4.shapeColor = 'green';

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(keyDown('down')) {
        ball.velocityY = 5;
    }
    
    if(keyDown('up')) {
        ball.velocityY = -5;
    }

    if(keyDown('right')) {
        ball.velocityX = 5;
    } 

    if(keyDown('left')) {
        ball.velocityX = -5;
    } 
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
        music.play();
        music.setVolume(0.9);
    }

    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        ball.bounceOff(block2);
        music.play();
        music.setVolume(0.9);
    }

    if(ball.isTouching(block3)){
        ball.shapeColor = "red";
        ball.bounceOff(block3);
        music.play();
        music.setVolume(0.9);
    }

    if(ball.isTouching(block4)){
        ball.shapeColor = "green";
        ball.bounceOff(block4);
        music.play();
        music.setVolume(0.9);
    }
    drawSprites();
}
