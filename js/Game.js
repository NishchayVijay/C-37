class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
  form.hide();
  textSize(30)
  text("gamestart",120,100)
  Player.getPlayerInfo();
  if (allplayers!==undefined){
 var display_position = 130
 display_position+= 20
 for(var plr in allPlayers){
if (plr==="player",+player.index)
fill("red")
else
fill("black")

 }
 text(allPlayers[plr].name+""+allPlayers[plr].distance_position)

  }
  if (keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+= 50
player.update()

  }
  }


}
