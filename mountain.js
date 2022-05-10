
let myPlace = localStorage.getItem('place')

if (myPlace) {
  localStorage.setItem('place', 'one')
  myPlace = 'one'
  console.log(myPlace)
} else {
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
}

$('a.m1a').click(function () {
  localStorage.setItem('place', 'm1a')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
  if (myPlace == 'm1a') {
    $('div.m1a').css('display', 'block')
    $('div div').not('.m1a').css('display', 'none')
  }
})



  $('a.m1b').click(function () {
    $('div.m1b').css('display', 'block')
    $('div div').not('.m1b').css('display', 'none')
    localStorage.setItem('place', 'm1b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })



  $('a.m2a').click(function () {
    $('div.m2a').css('display', 'block')
    $('div div').not('.m2a').css('display', 'none')
    localStorage.setItem('place', 'm2a')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.m2b').click(function () {
    $('div.m2b').css('display', 'block')
    $('div div').not('.m2b').css('display', 'none')
    localStorage.setItem('place', 'm2b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.m2c').click(function () {
    $('div.m2c').css('display', 'block')
    $('div div').not('.m2c').css('display', 'none')
    localStorage.setItem('place', 'm2c')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.m2d').click(function () {
    $('div.m2d').css('display', 'block')
    $('div div').not('.m2d').css('display', 'none')
    localStorage.setItem('place', 'm2d')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })