class cannonBall{
    constructor(x, y){
        var option = {
            isStatic: true
        }

        this.r = 30
        this.body = Bodies.circle(x, y, this.r, option)
        this.image = loadImage("assets/cannonball.png")
        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.r, this.r)
        pop();

        
    }

    shoot(){
        var newangle = cannon.angle- 30;
        newangle = newangle * (3.14/180)
        var velocity = p5.Vector.fromAngle(newangle)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, {x:velocity.x *(180 / 3.14), y: velocity.y *(180 / 3.14)})
    }

}