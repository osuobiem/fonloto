$(window).on('scroll', function() {
  if ($(window).scrollTop() > 5) {
    $('#header').attr('style', '')
  } else {
    $('#header').attr('style', 'margin-top: 15px')
  }
})
