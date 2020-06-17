var slider = new Slider('page', 1, 1, 1, 45);
$('.next').on('click', function(){
    var is = slider.next();
    if(is) {
        var nextDot = $('.dot.on').next();
        $('.dot.on').removeClass('on');
        nextDot.addClass('on');
    } else {
        location.href = '../Dashboard/Dashboard.html';
    }
})
$('.dot').on('click', function(){
    $('.dot.on').removeClass('on');
    $(this).addClass('on');
})
$('.sign-up').on('click', function(){
    $('.sign-up').hide();
    $('.sign-in').show();
    $('.login-box').removeClass('on');
    $('.signup-box').addClass('on');
})
$('.sign-in').on('click', function(){
    slider.move(0)
    $('.sign-in').hide();
    $('.sign-up').show();
    $('.signup-box').removeClass('on');
    $('.login-box').addClass('on');
})

$(function(){
    $('.sign-up').show();
    $('.sign-in').hide();
    $('.signup-box').removeClass('on');
    $('.login-box').removeClass('on');
    $('.login-box').addClass('on');
})