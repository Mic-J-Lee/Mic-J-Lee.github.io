$(document).ready(function() {
  localStorage.setItem("last_level", 'pizza_restaurant')

  var address = '500 E Madison St Chicago';
  $('#restaurants').before(address);

  function blinker() {
      $('.blink_me').fadeOut(100);
      $('.blink_me').fadeIn(100);
      var color = ['red', 'blue', 'green']
      $('.blink_me').css({ 'color': color[Math.floor(Math.random() * color.length)]})
  }

  function win() {
    if ($('.hasAddress').length === 0) {
      console.log("You won!")
      window.location.href = "bootstrap-turtles.html";
    }
  }
  setInterval(win, 100)

  function loss() {
    $('h2').text("Too slow.")
    console.log("You lost.")
    window.location.href = "game_over.html"
  }
  setTimeout(loss, 15000)

  function seizure() {
    $('.container').css({"background": "url('https://media.giphy.com/media/hmzAcor7gBsbK/giphy.gif')"})

    setInterval(blinker, 200);
    recursiveCountDown()
  }
  setTimeout(seizure, 5000)

  function recursiveCountDown(counter = 10) {
    if (counter > 0) {
      $('h2').text(`${counter}`)
      counter --
      setTimeout(recursiveCountDown.bind(null, counter), 1000)
    }
  }

})

function removeRestaurant() {
  $('#restaurants').find('li').last().remove()
}

