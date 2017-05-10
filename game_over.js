$(document).ready(function() {

  function revealHint() {
    const hints = {
      'restaurant_finder': 'Every time you mouse over a pizza restaurant, a dripping pizza appears.  Try going back and forth over all three!',
      'pizza_restaurant': 'If you click once on the button, and then hold down the enter key, it will be much faster!',
    }
    document.getElementById("hint").innerHTML = hints[localStorage.getItem("last_level")]
  }

  $(".hint").each(function() {
          $(this).hide();
  });

  $('.reveal-hint').on('click', function(event) {
    revealHint()
    $(this).parent().find('.hint').css('color', 'black')
    event.preventDefault()
    $(this).parent().find('.hint').fadeToggle()
  })





})
