 var userClickedPattern=[];
 var buttonColours=["red", "blue", "green", "yellow"];
 var gamePattern=[];
 var randomChosenColour;
 var randomNumber;
 var level=0;
 function nextSequence()
 { 
     userClickedPattern = [];      
    level=level+1;
    $("h1").text("LEVEL"+ level);
    randomNumber = Math.floor((Math.random()*4));
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    soundByColour(randomChosenColour);
   
     
}

$(".btn").click(function(event)
{
     var userChosenColour=event.target.id;
     userClickedPattern.push(userChosenColour);
     soundByColour(userChosenColour);
     animatePress(userChosenColour);
     
    checkAnswer(gamePattern, userClickedPattern);
    
})





function soundByColour(colourName){
    var audio = new Audio("sounds/" + colourName + ".mp3");
    audio.play();
 }

 function animatePress(currentColour)
 {
     $("#" + currentColour).addClass("pressed");
     setTimeout(function () {
     $("#" + currentColour).removeClass("pressed");
    }, 100);
 }

 

 function checkAnswer(gamePattern ,userClickedPattern)
{
   var lastindex=userClickedPattern.length-1;

   if(gamePattern[lastindex]===userClickedPattern[lastindex])
   {
    if (userClickedPattern.length === gamePattern.length) 
    {
            setTimeout(nextSequence, 500);
    }
    
   }
   else
   {
   $("h1").html('<span class="game-over-text">Game Over</span><br><span class="restart-text">Press any key to restart</span>');
    startOver();
   }
}
 
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}

 var started=false;
 $(document).keypress(function()
{
    if(started===false)
    {
        $("h1").text("Level 0");
        nextSequence();
        
        started=true;
    }
   
})


