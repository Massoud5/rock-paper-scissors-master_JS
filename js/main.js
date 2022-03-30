// JQuery

$(document).ready(function(){
    
    const handBtn = $(".hand-btn");

    $.each(handBtn, function(){
        $(handBtn).click(function(){
            $("#bg-triangle").hide();
        });
    });
    
    $("#paper-btn").click(function(){
        step2();
        $("#rock-btn").hide();
        $("#scissors-btn").hide();
        setTimeout(function(){

        },1000);
        // step3()
    });
    $("#rock-btn").click(function(){
        step2();
        $("#paper-btn").hide();
        $("#scissors-btn").hide();
    });
    $("#scissors-btn").click(function(){
        step2();
        $("#rock-btn").hide();
        $("#paper-btn").hide();
    });
    


    

    
    $("#rules-el").click(function(){
        $("figure").css("visibility","visible");
        $(".container").css("opacity","0.2");
        $(".rules").css("opacity","0.2");
    });
    $("#icon-close").click(function(){
        $("figure").css("visibility","hidden");
        $(".container").css("opacity","1");
        $(".rules").css("opacity","1");
    });
    $(".container").click(function(){
        $("figure").css("visibility","hidden");
        $(".container").css("opacity","1");
        $(".rules").css("opacity","1");
    });
});

function step2(){

};

function step3(){ //1s time maked


    let randomNum = Math.floor(Math.random()*3);
    if (randomNum == 0){
        $("#paper-btn").show();
    }
    else if (randomNum == 1){
        $("#rock-btn").show(); 
    }
    else if (randomNum == 2){
        $("#scissors-btn").show();
    }
}
