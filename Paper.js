class Paper{
  constructor(x,y,radius){
      var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:0.5,
       
      }
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.image = loadImage("sprites/paper.png");
      this.radius = radius;
      

      World.add(world,this.body)
  }
  display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(this.radius);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
  }
}