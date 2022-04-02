// JQuery
let playerScore = 5;
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
        setTimeout(function(){
            step4();
            paperBtnClicked();

        }, 1000);
    });
    $("#rock-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(1)").css("visibility","visible");
        step3();
        step4();
        setTimeout(function(){
            step4();
            rockBtnClicked();

        }, 1000);
    });
    $("#scissors-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(2)").css("visibility","visible");
        step3();
        step4();
        setTimeout(function(){
            step4();
            scissorsBtnClicked();

        }, 1000);
    });
});


function paperBtnClicked(){
    
    if (randomNum == 0){
        playerScore += 0;
        $("#score-num").text(playerScore);
        console.log(playerScore);
    }
    else if (randomNum == 1){
        playerScore += 1;
        $("#score-num").text(playerScore);  
        console.log(playerScore); 
    }
    else if (randomNum == 2){
        playerScore -= 1;
        $("#score-num").text(playerScore);  
        console.log(playerScore); 
    }  
}
function rockBtnClicked(){

    if (randomNum == 0){
        playerScore -= 1;
        $("#score-num").text(playerScore);  
    }
    else if (randomNum == 1){
        playerScore += 0;
        $("#score-num").text(playerScore);  
        console.log(playerScore);   
    }
    else if (randomNum == 2){
        playerScore += 1;
        $("#score-num").text(playerScore);   
    }
}
function scissorsBtnClicked(){

    if (randomNum == 0){
        playerScore += 1;
        $("#score-num").text(playerScore);     
    }
    else if (randomNum == 1){
        playerScore -= 1;
        $("#score-num").text(playerScore);    
    }
    else if (randomNum == 2){
        playerScore += 0;
        $("#score-num").text(playerScore);   
    }   
}