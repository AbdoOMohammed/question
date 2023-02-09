//////////////// Button up Top

let scrollbu = $(".main").offset().top;

$(window).scroll(function(){
    let scrollWindow = $(window).scrollTop();
    if(scrollWindow > scrollbu ){
        $(".upTo").fadeIn(500);
    }else{
        $(".upTo").fadeOut(500);
    } 
})
$(".upTo").click(function(){
    $("html,body").animate({scrollTop:0},0);
})
////////////////////////////////

$(".butDown").click(function(){
    $(".showMenu").slideToggle(100);
})
$(".main").click(function(){
    $(".showMenu").slideUp(100);
})
