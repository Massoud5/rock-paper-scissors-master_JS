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
        paperBtnClicked()
    });
    $("#rock-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(1)").css("visibility","visible");
        step3();
        rockBtnClicked()
    });
    $("#scissors-btn").click(function(){
        step2();
        $(".player-hand-btn:eq(2)").css("visibility","visible");
        step3();
        scissorsBtnClicked()
    });
      
    

    
    function paperBtnClicked(){

        if (randomNum == 0){
            console.log("equality0");   
        }
        else if (randomNum == 1){
            console.log("you win1");   
        }
        else if (randomNum == 2){
            console.log("you lose2");   
        }  
    }
    function rockBtnClicked(){

        if (randomNum == 0){
            console.log("you lose0");   
        }
        else if (randomNum == 1){
            console.log("equality1");    
        }
        else if (randomNum == 2){
            console.log("you win2");   
        }
    }
    function scissorsBtnClicked(){

        if (randomNum == 0){
            console.log("you win0");     
        }
        else if (randomNum == 1){
            console.log("you lose1");    
        }
        else if (randomNum == 2){
            console.log("equality2");   
        }   
    }
});

