$(document).on('click', '#comment__toggle', function() {
  $(this).parents('.post__content').children('.post__comment-list').stop().fadeToggle( "fast" );
});
$(document).on('click', '.item__question', function() {
  $(this).toggleClass('active');
  $(this).parents('.faq__item').children('.item__collapsed').toggleClass('active');
});
$(document).on('click', '.header__user-profile', function() {
  $( ".header__user-menu" ).stop().fadeToggle( "fast" );
});
$(document).on('click', '.ic-like', function(e) {
  e.preventDefault()
  $(this).toggleClass('active');
});

$(document).on('click', '.ic-share', function(e) {
  e.preventDefault()
  $(this).toggleClass('active');
});
$(document).ready(function() {
  $( '.search-form__input' ).focus(function() {
    if (parseInt($(window).width()) < 500) {
      $('.header__logo').fadeTo( 'slow' , 0);
    }
  });

  $( '.search-form__input' ).focusout(function() {
    $('.header__logo').fadeTo( 'slow' , 1);
  });
});