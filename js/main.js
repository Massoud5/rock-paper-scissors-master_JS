// JQuery

$(document).ready(function(){
    $(".pc-waiting-box").hide();

    $("#rules-btn").click(function(){
        $("figure").css("visibility","visible");
        $("main").css("opacity","0.2");
    });
    $("#icon-close").click(function(){
        $("main").css("opacity","1");
        $("figure").css("visibility","hidden");
    });


    
    const handBtn = $(".hand-btn");

    $.each(handBtn, function(){
        $(handBtn).click(function(){
            $(".triangle-items-box").hide();
        });
    });
    
    $("#paper-btn").click(function(){

    });
    $("#rock-btn").click(function(){

    });
    $("#scissors-btn").click(function(){

    });
    
 
});

// function step2(){
//     $(".pc-waiting-box").show();
//     $("#choices-p-box").css("visibility","visible");
// };

// function step3(){ //1s time made with setTimeout()
//     setTimeout(function(){
//         $(".pc-waiting-box").css("background","transparent");

//         let randomNum = Math.floor(Math.random()*3);
//         if (randomNum == 0){
//             $("#pc-paper-btn").css("visibility","visible");
//         }
//         else if (randomNum == 1){
//             $("#pc-rock-btn").css("visibility","visible"); 
//         }
//         else if (randomNum == 2){
//             $("#pc-scissors-btn").css("visibility","visible");
//         }
//     },1000);


// };
