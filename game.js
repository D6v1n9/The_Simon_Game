let buttonColours = ["green","red","yellow","blue"] ;
let gamePattern = [] ;
function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber] ;
    gamePattern.push(randomChosenColour) ;
    animateButton(randomChosenColour) ;
}

function animateButton(colour) {
    var colourSound = new Audio("./sounds/"+colour+".mp3");
     colourSound.play();
    $("#"+colour).animate({ opacity:0.1 },100).animate({opacity:1},100);
};

