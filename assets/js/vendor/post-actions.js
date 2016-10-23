$(document).on('click', '.ic-like', function(e) {
  e.preventDefault()
  $(this).toggleClass('active');
});

$(document).on('click', '.ic-share', function(e) {
  e.preventDefault()
  $(this).toggleClass('active');
});