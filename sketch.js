const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Constraint=Matter.Constraint;

var engine,world;
var ground1;

function setup(){
    createCanvas(3000,800);
    engine=Engine.create;
    world=engine.world;
    ground1 = new Ground(600,600,1200,20);
}
function draw(){
    background("white");
    Engine.update(engine);
    ground1.display();
}