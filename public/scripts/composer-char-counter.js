const countNumber = 140;

$(document).ready(function () {
  $("#tweet-text").on('input', function () {
    let count = countNumber - $(this).val().length;
    let counter = $(this).parent().siblings('.tweet-footer').children('.counter')
   counter.val(count);
   if (count < 0) {
    counter.addClass('error')
  } else {
    counter.removeClass('error')
  }

  });

  
});



