// JQuery

$(document).ready(function(){
 
    $("#rules-btn").click(function(){
        $("figure").css("visibility","visible");
        $("main").css("opacity","0.2");
    });
    $("#icon-close").click(function(){
        $("main").css("opacity","1");
        $("figure").css("visibility","hidden");
    });
    
    
    $("#paper-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(0)").css("visibility","visible");
        step3();
    });
    $("#rock-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(1)").css("visibility","visible");
        step3();
    });
    $("#scissors-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(2)").css("visibility","visible");
        step3();
    });
      
    
    function step2(){
        $(".triangle-items-box").hide();
        $(".game-board").css("visibility","visible");
        $(".pc-waiting-box").css("visibility","visible");
        $(".game-messages").hide();
    }
    
    function step3(){ //1s time made with setTimeout()
        let randomNum = Math.floor(Math.random()*3);
        let playerScore = 12;
        const playerScoreEl = $("#score-num");
    
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
        },1000);
    
        if (randomNum == 0 && $("#paper-btn").click){
            console.log("equality");   
        }
        else if (randomNum == 0 && $("#rock-btn").click){
            console.log("you lose");   
        }
        else if (randomNum == 0 && $("#scissors-btn").click){
            console.log("you win");   
        }
        else if (randomNum == 1 && $("#paper-btn").click){
            console.log("player win");   
        }
        else if (randomNum == 1 && $("#rock-btn").click){
            console.log("equality");   
        }
        else if (randomNum == 1 && $("#scissors-btn").click){
            console.log("you lose");   
        }
        else if (randomNum == 2 && $("#paper-btn").click){
            console.log("player lose");   
        }
        else if (randomNum == 2 && $("#rock-btn").click){
            console.log("player win");   
        }
        else if (randomNum == 2 && $("#scissors-btn").click){
            console.log("equality");   
        }
    }
    
    function step4(){
    
    }
});

