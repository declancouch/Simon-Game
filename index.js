var gameInProgress = false;

    $(".btn").click(function(){

        if(gameInProgress == false){

            $("body").addClass("wrong");
            $("h1").html("Stop Clicking The Damn Buttons!<br>Press A Key If You Actually Want To Play")
            var superWrongAduio = new Audio("./sounds/wrong.mp3");
            superWrongAduio.play();
            setTimeout(function(){
                $("body").removeClass("wrong");
            },200);
        setTimeout(function(){

            if(gameInProgress == false){
            $("h1").html("Press A Key to Start");
        }},4000);       
        }

    }

    )

 
    $(document).keydown(function() { 
        if (gameInProgress == false){
        gameInProgress = true;
        $("h1").text("Test On")
        game(0);
        inputvalues =[];
    }

    }
    )



var colors = [];
function game(){
        
        $("h1").text("Level " + (colors.length+1));
        colors.push(randomColor());
        displayingColors(colors);   
}


$(document).keydown(function() { 
    if (gameInProgress == true && colors.length >1){


        $("h1").text("Stop Clicking The Buttons! Play The Game")
        setTimeout(function(){
            $("h1").text("Level " + (colors.length));
        }, 1000)
    }
}
)



function randomColor(){ 

    var number = Math.random();
    number = number*4;
    number = Math.floor(number);
    if(number == 0){
        return "green";        
    }
    else if(number == 1){
        return "red";
    }
    else if(number == 2){
        return "yellow";
    }
    else if(number == 3){
        return "blue";
    }

}

var inputvalues = [];

$(".btn").click(function(){
    var colorSet = $(this).attr("id");
    inputvalues.push(colorSet);
    if(inputvalues.length == colors.length){

        checkInputs();
    }
})


function checkInputs() {
    var isWrong = false;

    for (var z = 0; z < colors.length; z++) {
        if (inputvalues[z] !== colors[z]) {
            $("h1").text("Wrong! Idiot!");
            $("body").addClass("wrong");
            var wrongAduio = new Audio("./sounds/wrong.mp3");
            wrongAduio.play();
            setTimeout(function(){
                $("body").removeClass("wrong");
            },200);
            gameInProgress = false;
            colors = []; // Reset for a new game
            isWrong = true;
            setTimeout(function(){

                if(gameInProgress == false){
                $("h1").text("Press any key to restart")

            }}, 1000);
        

            break;
        }
    }

    if (!isWrong) {
        $("h1").text("Correct!");
        inputvalues = []; // Reset input values
        setTimeout(game, 2000); // Go to the next level after a delay
    }
}



function displayingColors(totalColorsArray, x){ //use this function to display the colors for each level

    var x = 0;
    function displayNextColor(){

    totalNumberOfColors = totalColorsArray.length;
    if (x >= totalNumberOfColors){
        return;
    }

        if(totalColorsArray[x] == "green"){
            displayingGreen();
            x++;
     
        }
    
        else if(totalColorsArray[x] == "red"){
            displayingRed();
            x++;

        }

        else if(totalColorsArray[x] == "yellow"){
            displayingYellow();
            x++;

        }

        else if(totalColorsArray[x] == "blue"){
            displayingBlue();
            x++;
       
        }

        setTimeout(function(){

            displayNextColor();
        }, 1000);

    }

    displayNextColor();
    }



//need to create call button values to show automatically

//save each click to a checking array. And if the values dont line up to real values exit


//light up functions for when button gets pressed

$("#green").click(function(){

    var greenAudio = new Audio("./sounds/green.mp3");    
    greenAudio.play();
    $("#green").css("opacity", "50%");
    setTimeout(function(){

    $("#green").css("opacity", "100%");


    }, 100)




})

$("#red").click(function(){

    var redAudio = new Audio("./sounds/red.mp3");    
    redAudio.play();
    $("#red").css("opacity", "50%");
    setTimeout(function(){

    $("#red").css("opacity", "100%");


    }, 100)


})

$("#yellow").click(function(){

    var yellowAudio = new Audio("./sounds/yellow.mp3");    
    yellowAudio.play();
    $("#yellow").css("opacity", "50%");
    setTimeout(function(){

    $("#yellow").css("opacity", "100%");


    }, 100)


})

$("#blue").click(function(){

    var blueAudio = new Audio("./sounds/blue.mp3");    
    blueAudio.play();
    $("#blue").css("opacity", "50%");
    setTimeout(function(){

    $("#blue").css("opacity", "100%");


    }, 100)


})


function displayingGreen(){
    $("#green").css("opacity", "50%");
    var greenAudio = new Audio("./sounds/green.mp3");    
    greenAudio.play();
    setTimeout(function(){
    $("#green").css("opacity", "100%");
    }, 100)
}

function displayingRed(){
    $("#red").css("opacity", "50%");
    var redAudio = new Audio("./sounds/red.mp3");    
    redAudio.play();
    setTimeout(function(){
    $("#red").css("opacity", "100%");
    }, 100)
}
function displayingYellow(){
    $("#yellow").css("opacity", "50%");
    var yellowAudio = new Audio("./sounds/yellow.mp3");    
    yellowAudio.play();
    setTimeout(function(){
    $("#yellow").css("opacity", "100%");
    }, 100)
}
function displayingBlue(){
    $("#blue").css("opacity", "50%");
    var blueAudio = new Audio("./sounds/blue.mp3");    
    blueAudio.play();
    setTimeout(function(){
    $("#blue").css("opacity", "100%");
    }, 100)
}