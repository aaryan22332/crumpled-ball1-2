class Paper{

    constructor(x,y,r){
        var optins = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,

        }
        this.x=x;
        this.y=y;
        this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,optins)
World.add(world,this.body) 
this.image=loadImage("paper.png")

    }
    display(){
    var paper=this.body.position
    
    push()
     translate(paper.x,paper.y)
     
    imageMode(CENTER)
    fill("green")
    image(this.image,0,0,this.r,this.r)
    pop()
}
}