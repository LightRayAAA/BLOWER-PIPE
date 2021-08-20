class Ball{

constructor(a,b,c){

var options = {

isStatic: false,
restitution: 0.8
}

this.x = a;
this.y = b;
this.radius = c;


this.body = Bodies.circle(a,b,c,options)
World.add(world, this.body)
}

display(){

var pos = this.body.position
push()
translate(pos.x, pos.y)
ellipseMode(RADIUS)
ellipse(0 ,0, this.radius, this.radius)
pop()
}
}