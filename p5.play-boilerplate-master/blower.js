class Blower{

    constructor(a,b,c,d){
    
    var options = {
    
    isStatic: true
    }
    
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
    
    this.body = Bodies.rectangle(a,b,c,d,options)
    World.add(world, this.body)
    }
    
    display(){
    
    var pos = this.body.position
    push()
    fill("brown")
    translate(pos.x, pos.y)
    rectMode(CENTER)
    rect(0, 0, this.width, this.height)
    pop()
    }
    }