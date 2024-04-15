jQuery (document).ready(function(){
  // menu
  $('.main-menu > li').mouseover(function(){
    $(this).find('.sub-menu').stop().slideDown();
  }).mouseout(function(){
    $(this).find('.sub-menu').stop().slideUp();
  })

  // slide
  $('.slide-images li:gt(0)').hide();
  setInterval(function(){
    $('.slide-images li:nth-child(1)').fadeOut(3000)
    .next('li').fadeIn(3000).end()
    .appendTo('.slide-images');
  },3000)

  // modal
  $('.modal-btn button').click(function(){
    $('.modal-bg').hide();
  });
  $('.con1 table tr:first-child').click(function(){
    $('.modal-bg').show();
  })
})