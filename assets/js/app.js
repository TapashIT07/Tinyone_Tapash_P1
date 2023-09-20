$(function(){
	 
    $('.collapse_btn').click(function(){
        $('.menu').slideToggle();
    });

$('.back_to_top').click(function(){
    $('html,body').animate({scrollTop:0},500);

});


$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if (scrollTop>400){
        $('.back_to_top').show();
    } else{
        
        $('.back_to_top').hide();

    }
});



});