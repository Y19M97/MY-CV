$(document).ready(function () {
  $('#loading .fa-spinner').fadeOut(2000)
  $('#loading h4').animate({ opacity: '0' }, 2000, function () {
    $('#loading').slideUp(2000, function () {
      $('body').css('overflow', 'auto')
      $('#loading').remove()

    })
  })
})