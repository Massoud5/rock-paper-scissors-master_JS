function step2(){
    $(".triangle-items-box").hide();
    $(".game-board").css("visibility","visible");
    $(".pc-waiting-box").show();
    $(".game-messages").hide();
    $(".pc-hand-btn").css("visibility","hidden");
    $(".player-hand-btn").css("visibility","hidden");
}


function step3(){ 
    randomNum = Math.floor(Math.random()*3);

    setTimeout(function(){
        $(".pc-waiting-box").hide();

        if (randomNum == 0){
            $(".pc-hand-btn:eq(0)").css("visibility","visible");
        }
        else if (randomNum == 1){
            $(".pc-hand-btn:eq(1)").css("visibility","visible"); 
        }
        else if (randomNum == 2){
            $(".pc-hand-btn:eq(2)").css("visibility","visible");
        }
    },500);
}



function step4(){
    $(".game-messages").show();

    if (playerScoreUp){
        $("#win").show();
        $("#losed").hide();
        $("#equal").hide();
    }
    else if (playerScoreDown){
        $("#losed").show();
        $("#win").hide();
        $("#equal").hide();
    }
    else{
        $("#equal").show();
        $("#win").hide();
        $("#losed").hide();
    }

    if (playerScore == 0){
        $("#play-again").css("opacity","0");
        setTimeout(function(){
            finalStep();
            $("#game-over").show();
            $("#player-won").hide();
        },1000);
    }
    else if (playerScore == 10){
        $("#play-again").css("opacity","0");
        setTimeout(function(){
            finalStep();
            $("#game-over").hide();
            $("#player-won").show();
        },1000);
    }

    function finalStep(){ // Called in step4
        $(".final").css("visibility","visible");
        $(".game-board").css("visibility","hidden");
        $(".player-hand-btn").css("visibility","hidden");
        $(".pc-hand-btn").css("visibility","hidden");
    }
}

function victorAnim(animTarget){

    setTimeout(function(){    
        $(animTarget).css("box-shadow",`inset 0 7px #d8d6d6,
                                0 0 0 50px rgba(168, 166, 166, 0.03)`
                    );
    },500);
    setTimeout(function(){
        $(animTarget).css("box-shadow",`inset 0 7px #d8d6d6,
                                    0 0 0 50px rgba(168, 166, 166, 0.03),
                                    0 0 0 100px rgba(168, 166, 166, 0.03)`
                        );
    },700);
    setTimeout(function(){
        $(animTarget).css("box-shadow",`inset 0 7px #d8d6d6,
                                    0 0 0 50px rgba(168, 166, 166, 0.03),
                                    0 0 0 100px rgba(168, 166, 166, 0.03),
                                    0 0 0 150px rgba(168, 166, 166, 0.03)`
                        );
    },900);
    setTimeout(function(){
        $(animTarget).css("box-shadow",`inset 0 7px #d8d6d6,
                                    0 0 0 50px rgba(168, 166, 166, 0.03),
                                    0 0 0 100px rgba(168, 166, 166, 0.03)`
                        );
    },1500);
    setTimeout(function(){    
        $(animTarget).css("box-shadow",`inset 0 7px #d8d6d6,
                                0 0 0 50px rgba(168, 166, 166, 0.03)`
                        );
    },1600);
    setTimeout(function(){    
        $(animTarget).css("box-shadow",`inset 0 7px #d8d6d6`
                        );
    },1700);
}