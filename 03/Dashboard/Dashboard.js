// 사이드 메튜 클릭시 선택 이벤트
$(document).on('click', '.item', function(){
    $('.item.on').removeClass('on');
    $(this).addClass('on');
  
    var i = $(this).index();
    $('.tab.on').removeClass('on');
    $('.tab').eq(i).addClass('on');
})