class TrashCan{
    constructor(x,y,width,height){
        var options = {
         isStatic:true,
         friction:0.5,
         density:1
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("sprites/dustbin.png");
        this.width = width;
        this.height = height;

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        fill(255);
        imageMode(this.radius);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}