var T1

function setup (){
    createCanvas(400,400)

    T1  = createSprite(300,300,10,10)
    T1.shapeColor = "red"
}

function draw (){
    background("black")
    drawSprites()
    
   if(keyDown(UP_ARROW)){
        ChangePosition(0,-1)
   }
   else if(keyDown(DOWN_ARROW)){
        ChangePosition(0,1)
   }
   else if(keyDown(LEFT_ARROW)){
       ChangePosition(-1,0)
   }
   else if(keyDown(RIGHT_ARROW)){
       ChangePosition(0,1)
   }

}

function ChangePosition(x, y){
     T1.x = T1.x+x
     T1.y = T1.y+y
}