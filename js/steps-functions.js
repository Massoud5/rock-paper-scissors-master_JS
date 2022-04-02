function step2(){
    $(".triangle-items-box").hide();
    $(".game-board").css("visibility","visible");
    $(".pc-waiting-box").css("visibility","visible");
    $(".game-messages").hide();
}

let randomNum = Math.floor(Math.random()*3);

function step3(){ 

    setTimeout(function(){
        $(".pc-waiting-box").hide();

        if (randomNum == 0){
            $("#pc-paper-btn").css("visibility","visible");
        }
        else if (randomNum == 1){
            $("#pc-rock-btn").css("visibility","visible"); 
        }
        else if (randomNum == 2){
            $("#pc-scissors-btn").css("visibility","visible");
        }
    },500);
}



function step4(){
    $(".game-messages").show();

    if (playerScoreUp){
        $("#win").css("visibility","visible");
    }
    else if (playerScoreDown){
        $("#losed").css("visibility","visible");
    }
    else{
        $("#win").css("visibility","visible");
        $("#win").text("EQUAL");
    }
    
    }



