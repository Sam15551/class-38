class Game {
     constructor(){}
     getState(){
         var gameStateRef = database.ref("gameState"); //refering to a datafield
         gameStateRef.on("value",function(data){  //setting up listener
             gameState = data.val();  //reading to data
         })
     }     
     
     update(state){
         database.ref('/').update({
             gameState:state
         })
        }  

     async start(){
         if(gameState === 0){
             player = new Player()
             var playerCountRef = await database.ref('playerCount').once("value");
             if(playerCountRef.exists()){
                 playerCount = playerCountRef.val()
                 player.getCount()
             }
             form = new Form()
             form.display()
         }
        
     }    
     
     play(){

    if(keyIsDown(UP_ARROW) && player.Index !== null){
        player.distance += 550;
        player.update() 
    }
     
    if(allPlayers !== undefined){
        for(var plr in allPlayers){
            if(plr === "player"+player.index){
                fill("red")
            }
            else{
                fill("black")
            }
        }
       display_position += 20 
       textSize(15)
       text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
       
    }

         form.hideAll()
         textSize(30)
         text("Game Start",120,100)
         
     }
} 