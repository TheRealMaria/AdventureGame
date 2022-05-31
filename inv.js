
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
  if (localStorage.getItem('place') == 'f2b2') {
    $('.invforest').css('display', 'block')
  }
 