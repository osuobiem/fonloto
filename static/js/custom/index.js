$(window).on('scroll', function() {
  if ($(window).scrollTop() > 0) {
    $('.header').attr('style', '')
  } else {
    $('.header').attr('style', 'margin-top: 15px')
  }
})
