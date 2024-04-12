jQuery (document).ready(function(){

  //menu
  $('.main-menu > li').mouseover(function(){
    $(this).find('.sub-menu').stop().slideDown(300)
  }).mouseout(function(){
    $(this).find('.sub-menu').stop().slideUp(300)
  })

  //slide
  setInterval(function(){
    $('.slide-box').delay(3000).animate({marginTop : -300});
    $('.slide-box').delay(3000).animate({marginTop : -600});
    $('.slide-box').delay(3000).animate({marginTop : 0});
  })

  //tab-menu
  // $('ul.tab-menu').hide();
  $('.tab-menu > li').click(function(){
    $('.tab-menu > li').removeClass('active')
    $(this).addClass('active');

    $('.tab-menu > li').find('.tab-sub').stop().hide();
    $(this).find('.tab-sub').stop().show();
  })

  //popup
  $('.tab-sub table tr:first-child').click(function(){
    $('.popup').show()
  })
  $('.close-btn').click(function(){
    $('.popup').hide()
  })
})