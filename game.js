let buttonColours = ["green","red","yellow","blue"] ;
let gamePattern = [] ; // store the computer value 
let userClickedPattern = [] ; // array which will store the user value that it clicked
// getting data using random number by system 

startGame();

function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber] ;
    gamePattern.push(randomChosenColour) ;
    animateButton(randomChosenColour) ;
}
// setting animation on the button 
function animateButton(colour) {
    var colourSound = new Audio("./sounds/"+colour+".mp3");
    colourSound.play();
    $("#"+colour).animate({ opacity:0.1 },100).animate({opacity:1},100);
};
// getting user input using handler function 
function handler() {
    $(".btn").click(function(event) {
        let userChosenColour = event.target.id; // or this.id  or $(this).attr("id") or event.target.getAttribute("id")
        userClickedPattern.push(userChosenColour) ;
        // console.log(userClickedPattern) ;
        playSound(userChosenColour);
        animatePress(userChosenColour);
    })
}
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

//Getting A key press to start the game 
function startGame() {
    $(document).keydown(function(event) {
        if(event.key == "a") {
            nextSequence();
            let level = 1 ;
        
        }
    })
}
