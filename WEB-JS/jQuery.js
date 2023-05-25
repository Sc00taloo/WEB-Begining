$(window).scroll(function(){
    if ($(window).scrollTop() >= 200)
    {
        $(".floatMenu").css({position:'fixed',left:'0',top:'0'});
    }
    else
    {
        $(".floatMenu").css({position:'absolute',left:'0',top:'200px'});
    }
});