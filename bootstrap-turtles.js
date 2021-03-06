$(document).ready(function() {
  localStorage.setItem("last_level", 'bootstrap-turtles')

  function blinker() {
      $('.blink_me').fadeOut(100);
      $('.blink_me').fadeIn(100);
      var color = ['red', 'blue', 'green']
      $('.blink_me').css({ 'color': color[Math.floor(Math.random() * color.length)]})
  }

  function win() {
    if ($('.hasAddress').length === 1) {
      console.log("You won!")
      window.location.href = "flights_near_me.html";
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

