// JQuery
$(document).ready(function(){
    $("#rules-btn").click(function(){
        $("figure").css("visibility","visible");
        $("main").hide();
    });
    $("#icon-close").click(function(){
        $("figure").css("visibility","hidden");
        $("main").show();
    });


    $("#rock-btn").click(function(){
        step2();

        $(".player-item-btn:eq(0)").css("visibility","visible");

        step3();

        setTimeout(function(){
            rockBtnClicked();
        }, 500);

        setTimeout(function(){
            step4();
        },1000);
    });
    $("#paper-btn").click(function(){
        step2();
        
        $(".player-item-btn:eq(1)").css("visibility","visible");

        step3();

        setTimeout(function(){
            paperBtnClicked();  
        }, 500);
        
        setTimeout(function(){
            step4();
        },1000);
    });
    $("#scissors-btn").click(function(){
        step2();
        
        $(".player-item-btn:eq(2)").css("visibility","visible");

        step3();
        
        setTimeout(function(){
            scissorsBtnClicked(); 
        }, 500);
        
        setTimeout(function(){
            step4();
        },1000);
    });
    $("#lizard-btn").click(function(){
        step2();
        
        $(".player-item-btn:eq(3)").css("visibility","visible");

        step3();

        setTimeout(function(){
            lizardBtnClicked();  
        }, 500);

        setTimeout(function(){
            step4();
        },1000);
    });
    $("#spock-btn").click(function(){
        step2();

        $(".player-item-btn:eq(4)").css("visibility","visible");

        step3();

        setTimeout(function(){
            spockBtnClicked(); 
        }, 500);

        setTimeout(function(){
            step4();
        },1000);
    });


    $("#play-again").click(function(){
        $(".pentagon-items-box").show();
        $(".game-board").css("visibility","hidden");
        $(".pc-item-btn").css("visibility","hidden");
        $(".player-item-btn").css("visibility","hidden");
    });


    $("#restartBtn").click(function(){
        $("#play-again").css("opacity","1");
        $(".final").css("visibility","hidden");
        $(".pentagon-items-box").show();
        playerScore = 2;
        $("#score-num").text(playerScore);
    });
});


let randomNum = "";
let playerScore = 5;
let playerScoreUp = ""; 
let playerScoreDown = "";


function rockBtnClicked(){

    if (randomNum == 0){
        playerScore += 0;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = false;  
    }
    else if (randomNum == 1){
        playerScore -= 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = true;    
        victorAnim("#pc-paper-btn");  
    }
    else if (randomNum == 2){
        playerScore += 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = true;
        playerScoreDown = false;
        victorAnim("#player-rock-btn");   
    }
    else if (randomNum == 3){
        playerScore += 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = true;
        playerScoreDown = false; 
        victorAnim("#player-rock-btn");    
    }
    else if (randomNum == 4){
        playerScore -= 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = true; 
        victorAnim("#pc-spock-btn");  
    }
}


function paperBtnClicked(){
    if (randomNum == 0){
        playerScore += 1;
        $("#score-num").text(playerScore);
        playerScoreUp = true;
        playerScoreDown = false;
        victorAnim("#player-paper-btn"); 
    }
    else if (randomNum == 1){
        playerScore += 0;
        $("#score-num").text(playerScore);
        playerScoreUp = false;
        playerScoreDown = false;  
    }
    else if (randomNum == 2){
        playerScore -= 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = false;
        playerScoreDown = true; 
        victorAnim("#pc-scissors-btn");
    }  
    else if (randomNum == 3){
        playerScore -= 1;
        $("#score-num").text(playerScore);
        playerScoreUp = false;
        playerScoreDown = true; 
        victorAnim("#pc-lizard-btn"); 
    }
    else if (randomNum == 4){
        playerScore += 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = true;
        playerScoreDown = false; 
        victorAnim("#player-paper-btn");
    }  
}


function scissorsBtnClicked(){

    if (randomNum == 0){
        playerScore -= 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = true;
        victorAnim("#pc-rock-btn");     
    }
    else if (randomNum == 1){
        playerScore += 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = true;
        playerScoreDown = false; 
        victorAnim("#player-scissors-btn");  
    }
    else if (randomNum == 2){
        playerScore += 0;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = false;  
    } 
    else if (randomNum == 3){
        playerScore += 1;
        $("#score-num").text(playerScore);
        playerScoreUp = true;
        playerScoreDown = false; 
        victorAnim("#player-scissors-btn"); 
    }
    else if (randomNum == 4){
        playerScore -= 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = false;
        playerScoreDown = true; 
        victorAnim("#pc-spock-btn");
    }    
}


function lizardBtnClicked(){

    if (randomNum == 0){
        playerScore -= 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = true;
        victorAnim("#pc-rock-btn");     
    }
    else if (randomNum == 1){
        playerScore += 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = true;
        playerScoreDown = false; 
        victorAnim("#player-lizard-btn");  
    }
    else if (randomNum == 2){
        playerScore -= 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = false;
        playerScoreDown = true;
        victorAnim("#pc-scissors-btn");   
    } 
    else if (randomNum == 3){
        playerScore += 0;
        $("#score-num").text(playerScore);
        playerScoreUp = false;
        playerScoreDown = false; 
    }
    else if (randomNum == 4){
        playerScore += 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = true;
        playerScoreDown = false; 
        victorAnim("#player-lizard-btn");
    }    
}


function spockBtnClicked(){

    if (randomNum == 0){
        playerScore += 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = true;
        playerScoreDown = false;
        victorAnim("#player-spock-btn");     
    }
    else if (randomNum == 1){
        playerScore -= 1;
        $("#score-num").text(playerScore);  
        playerScoreUp = false;
        playerScoreDown = true; 
        victorAnim("#pc-paper-btn");  
    }
    else if (randomNum == 2){
        playerScore += 1;
        $("#score-num").text(playerScore); 
        playerScoreUp = true;
        playerScoreDown = false;  
        victorAnim("#player-spock-btn"); 
    } 
    else if (randomNum == 3){
        playerScore -= 1;
        $("#score-num").text(playerScore);
        playerScoreUp = false;
        playerScoreDown = true; 
        victorAnim("#pc-lizard-btn"); 
    }
    else if (randomNum == 4){
        playerScore += 0;
        $("#score-num").text(playerScore);  
        playerScoreUp = false;
        playerScoreDown = false; 
    }    
}