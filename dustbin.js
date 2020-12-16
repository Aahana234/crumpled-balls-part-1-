class Dustbin{
    constructor(){
      
        var options={
           isStatic: true,
            friction:1.0,
            density:1.0
        }
        this.wall1 = Bodies.rectangle(1200,335,20,100,options);
        this.wall2 = Bodies.rectangle(1000,330,20,100,options);
        this.wall3 = Bodies.rectangle(1100,380,220,20,options);
       
        
        World.add(myWorld,this.wall1);
        World.add(myWorld,this.wall2);
        World.add(myWorld,this.wall3);
      
    
    }

    display(){
        var pos1 = this.wall1.position;
        var pos2 = this.wall2.position
        var pos3 = this.wall3.position
        
        push();
    
        rectMode(CENTER);
        fill(255);
        rect(pos1.x,pos1.y,20,100);
        rect(pos2.x,pos2.y,20,100);
        rect(pos3.x,pos3.y,220,20);
        pop();


    }



}




