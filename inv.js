// if you have d2c as your local storage, then the button on  d2a needs to change go to d2a2
if (localStorage.getItem('place') == 'd2a2') {
    $('a.d2a2').click(function () {
      $('.invforest').css('display', 'block')
      localStorage.setItem('place', 'd2c')
      myPlace = localStorage.getItem('place')
      console.log(myPlace)
    })
  } else {
    $('a.d2a').click(function () {
      $('div.d2a').css('display', 'block')
      $('div div').not('.d2a').css('display', 'none')
      localStorage.setItem('place', 'd2a')
      myPlace = localStorage.getItem('place')
      console.log(myPlace)
    })
  }