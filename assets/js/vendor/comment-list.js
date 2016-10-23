$(document).on('click', '#comment__toggle', function() {
  $(this).parents('.post__content').children('.post__comment-list').stop().fadeToggle( "fast" );
});