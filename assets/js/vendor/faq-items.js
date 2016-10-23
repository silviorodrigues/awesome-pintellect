$(document).on('click', '.item__question', function() {
  $(this).toggleClass('active');
  $(this).parents('.faq__item').children('.item__collapsed').toggleClass('active');
});