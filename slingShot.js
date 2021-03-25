class SlingShot{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.3 

        }
        this.SlingShot=Constrain.create(options)
        World.add(World,this.SlingShot)
    }
    
}