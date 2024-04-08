jQuery (document).ready(function(){
  // MENU
  $('.main-menu > li').mouseover(function(){
    $(this).find('.sub-menu').stop().slideDown(300);
  }).mouseout(function(){
    $(this).find('.sub-menu').stop().slideUp(300);
  })

  // SLIDE
  setInterval(function(){
    $('.slideList').delay(2000).animate({marginLeft:-1200});
    $('.slideList').delay(2000).animate({marginLeft:-2400});
    $('.slideList').delay(2000).animate({marginLeft:0});
  })

  //TAB MENU
  $('.tabMenu > li > a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
    return false;
  })
});