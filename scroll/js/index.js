$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()> 100) {
      $('button').fadeIn()
    }else {
      $('button').fadeOut()
    }
    return false;
  })

  $('button').click(function(){
    $('html, body').animate({scrollTop: 0}, 900)
    return false
  })

})
