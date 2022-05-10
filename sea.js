
let myPlace = localStorage.getItem('place')

if (myPlace) {
  localStorage.setItem('place', 'one')
  myPlace = 'one'
  console.log(myPlace)
} else {
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
}

$('a.s1a').click(function () {
  localStorage.setItem('place', 's1a')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
  if (myPlace == 's1a') {
    $('div.s1a').css('display', 'block')
    $('div div').not('.s1a').css('display', 'none')
  }
})



  $('a.s1b').click(function () {
    $('div.s1b').css('display', 'block')
    $('div div').not('.s1b').css('display', 'none')
    localStorage.setItem('place', 's1b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })



  $('a.s2a').click(function () {
    $('div.s2a').css('display', 'block')
    $('div div').not('.s2a').css('display', 'none')
    localStorage.setItem('place', 's2a')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.s2b').click(function () {
    $('div.s2b').css('display', 'block')
    $('div div').not('.s2b').css('display', 'none')
    localStorage.setItem('place', 's2b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.s2c').click(function () {
    $('div.s2c').css('display', 'block')
    $('div div').not('.s2c').css('display', 'none')
    localStorage.setItem('place', 's2c')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.s2d').click(function () {
    $('div.s2d').css('display', 'block')
    $('div div').not('.s2d').css('display', 'none')
    localStorage.setItem('place', 's2d')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })