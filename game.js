let buttonColours = ["green","red","yellow","blue"] ;
let gamePattern = [] ; // store the computer value 
let userClickedPattern = [] ; // array which will store the user value that it clicked

//to check whether the game is started or not need to create an variable bool
let started = false ;

// to change the text of h1 you need another variable 
let level = 0 ;

$(document).keydown(function(event) {
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true ;
    }
})

// getting user input by clicking on the buttons present

$(".btn").click(function(event) {
    let userChosenColour = event.target.id; // or this.id  or $(this).attr("id") or event.target.getAttribute("id")
    userClickedPattern.push(userChosenColour) ;
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1) ;
})

// will compare answer with random genrated (gamePattern && userClickedPattern) compare

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            userClickedPattern = [] ;
            setTimeout(function(){
                nextSequence();
            },1000) ;
        }
        
    }
    else {
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
}
// restart the game by changing the values to intial
function startOver() {
    level = 0 ;
    gamePattern = [] ;
    started = false ;
}


// getting data using random number by system 
function nextSequence() {
    //every time next sequence is called it will increase the level and change the h1
    level++ ;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber] ;
    gamePattern.push(randomChosenColour) ;
    animateButton(randomChosenColour) ;    
}
// setting animation on the button 
function animateButton(colour) {
    let colourSound = new Audio("./sounds/"+colour+".mp3");
    colourSound.play();
    $("#"+colour).animate({ opacity:0.1 },100).animate({opacity:1},100);
};

// on click we want sound right ? so the below function is for that purpose
function playSound(name) {
    var colourSound = new Audio("./sounds/"+name+".mp3");
    colourSound.play();
}
// the below function is for getting animation when you click the button
function animatePress(name) {
    $("#"+name).addClass("pressed");
    setTimeout(function(){
        $("#"+name).removeClass("pressed");
    },100);
}

