jQuery (document).ready(function(){
  // header menu
  $('.main-menu > li').mouseover(function(){
    $(this).find('.sub-menu').stop().slideDown();
  }).mouseout(function(){
    $(this).find('.sub-menu').stop().slideUp();
  })

  // main slide
  setInterval(function(){
    $('.slide-imgs').delay(2000).animate({marginLeft:-800})
    $('.slide-imgs').delay(2000).animate({marginLeft:-1600})
    $('.slide-imgs').delay(2000).animate({marginLeft:0})
  })

  // popup
  $('.close-btn').click(function(){
    $('.popup').hide();
  })
  $('.notice table tr:first-child').click(function(){
    $('.popup').show();
  })
})