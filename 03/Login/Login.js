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