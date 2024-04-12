jQuery (document).ready(function(){
  // menu
  $('.main-menu > li').mouseover(function(){
    $('.sub-menu').stop().slideDown(300);
  }).mouseout(function(){
    $('.sub-menu').stop().slideUp(300);
  })

  // slide
  $('#slide li:gt(0)').hide();
  setInterval(function(){
    $('#slide li:first-child').fadeOut()
    .next('li').fadeIn().end().appendTo('#slide')
  },3000)

  // popup
  $('.notice table tr:nth-child(1)').click(function(){
    $('.popup').show(300);
  });
  $('.close-btn').click(function(){
    $('.popup').hide(300);
  })
})