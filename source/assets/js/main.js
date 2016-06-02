$(document).ready(function(){
    console.log('cargo secured');
    var menuBtn = $('nav .btn');
    var menuBtnW = $('nav .btn_w');
    var menuUl = $('nav ul');

    menuBtn.click(function(){
        menuUl.fadeToggle(500);
        console.log('clicked');
    });

    menuBtnW.click(function(){
        menuUl.fadeToggle(500);
        console.log('clicked');
    });

    // Intro
    var home = $('#home');
    var intro = $('.intro');
    var h1 = $('.intro h1');
    var words = ['design', 'develop', 'prototype', 'produce', 'build', 'feel', 'touch', 'make', 'create', 'craft', 'inspect'];

    home.hide(0);

    $.each(words, function(i, val){
        setTimeout(function(){
            $(h1).fadeOut("slow", function(){
                $(this).text(val).fadeIn("slow");
            });
        }, i * 750);
        if(val !== "inspect"){
            console.log("ay lmao");
        }
    });

});
