$(document).ready(function () {
  $('.reviews__container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      
    ]
  });
});

var timer2 = "30:00";
var interval = setInterval(function () {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);

$('.form-order__button').on('click', function () {
  let valid = false;
  if ($('#name').val().length > 1) {
    $('#name').removeClass('form-order__input_error')
    valid = true
  } else {
    $('#name').addClass('form-order__input_error')
    valid = false;
  }
  if ($('#number').val().length == 11) {
    $('#number').removeClass('form-order__input_error')
    valid = true
  } else {
    $('#number').addClass('form-order__input_error')
    valid = false;
  }
  if (valid) {
    const width = $('.form-order').width()
    const height = $('.form-order').height()
    $('.form-order').html('Спасибо за заявку!')
    $('.form-order').width(width)
    $('.form-order').height(height)
    $('.form-order').addClass('form-order_send')
  }

})
$('#name').on('input', function () {
  $(this).removeClass('form-order__input_error')
})
$('#number').on('input', function () {
  $(this).removeClass('form-order__input_error')
})


