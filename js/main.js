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
    $("main").click(function(){
        $("main").css("opacity","1");
        $("figure").css("visibility","hidden");
    });
    
    
    $("#paper-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(0)").css("visibility","visible");
        step3();
        setTimeout(function(){
            paperBtnClicked();
            
        }, 500);
        setTimeout(function(){
            step4();
        },1000);
    });
    $("#rock-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(1)").css("visibility","visible");
        step3();
        setTimeout(function(){
            rockBtnClicked();
        }, 500);
        setTimeout(function(){
            step4();
        },1000);
    });
    $("#scissors-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(2)").css("visibility","visible");
        step3();
        setTimeout(function(){
            scissorsBtnClicked(); 
        }, 500);
        setTimeout(function(){
            step4();
        },1000);
    });

    $("#play-again").click(function(){
        $(".triangle-items-box").show();
    });
});

let playerScore = 5;
let playerScoreUp = true;
let playerScoreDown = false;

function paperBtnClicked(){
    
    if (randomNum == 0){
        playerScore += 0;
        $("#score-num").text(playerScore);
        playerScoreUp = false;
        playerScoreDown = false;
    }
    else if (randomNum == 1){
        playerScore += 1;
        $("#score-num").text(playerScore);
        playerScoreUp = true;
        playerScoreDown = false;  
    }
    else if (randomNum == 2){
        playerScore -= 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = false;
        playerScoreDown = true; 
    }  
}
function rockBtnClicked(){

    if (randomNum == 0){
        playerScore -= 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = true;  
    }
    else if (randomNum == 1){
        playerScore += 0;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = false;    
    }
    else if (randomNum == 2){
        playerScore += 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = true;
        playerScoreDown = false;  
    }
}
function scissorsBtnClicked(){

    if (randomNum == 0){
        playerScore += 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = true;
        playerScoreDown = false;    
    }
    else if (randomNum == 1){
        playerScore -= 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = false;
        playerScoreDown = true;  
    }
    else if (randomNum == 2){
        playerScore += 0;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = false;  
    }   
}