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