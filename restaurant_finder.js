$(document).ready(function() {
  localStorage.setItem("last_level", 'restaurant_finder')

  $('button').on('click', function() {
    $(this).parent().after( $(this).parent().data("address") )
  })

  $('.restaurant-detail').on('mouseenter', function() {
    $(this).append( $('<img width="50px" src="https://33.media.tumblr.com/tumblr_mc23lmfLZ71rfjowdo1_500.gif">') )
  })

  $('.show-price').on('click', function(event) {
    $(this).parent().find('.list-group').css('color', 'black')
    event.preventDefault()
    $(this).parent().find('.list-group').fadeToggle()
  })

  function win() {
    if ($('img').length > 50) {
      console.log("You won!")
      window.location.href = "pizza_restaurant.html";
    }
  }
  setInterval(win, 100)
  
  function loss() {
    $('h2').text("Too slow.")
    console.log("You lost.")
    window.location.href = "game_over.html"
  }
  setTimeout(loss, 20000)

  function seizure() {
    $('.container').css({'background': "url('http://animatedpizzagifs.com/images/psycadelic-pizza-love.gif')"})
    $('.row').css({'color': 'white'})
    recursiveCountDown()
  }
  setTimeout(seizure, 10000)

  function recursiveCountDown(counter = 10) {
    if (counter > 0) {
      $('h2').text(`${counter}`)
      counter --
      setTimeout(recursiveCountDown.bind(null, counter), 1000)
    }
  }
})

  

