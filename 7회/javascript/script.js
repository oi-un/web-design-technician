jQuery (document).ready(function(){

  // menu
  $('.main-menu > li').mouseover(function(){
    $(this).find('.sub-menu').stop().slideDown(500)
  }).mouseout(function(){
    $(this).find('.sub-menu').stop().slideUp(500)
  })

  // slide
  $('.slide a:gt(0)').hide();
  setInterval(function(){
    $('.slide a:first-child').fadeOut()
    .next('a').fadeIn().end().appendTo('.slide')
  }, 3000)

  //tab-menu
  $('.tab-menu > li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  // popup
  $('.notice ul li:first-child').click(function(){
    $('.pop').show()
  })
  $('.pop-btn button').click(function(){
    $('.pop').hide()
  })
})