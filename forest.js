
let myPlace = localStorage.getItem('place')

if (myPlace) {
  localStorage.setItem('place', 'one')
  myPlace = 'one'
  console.log(myPlace)
} else {
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
}

$('a.f1a').click(function () {
  localStorage.setItem('place', 'f1a')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
  if (myPlace == 'f1a') {
    $('div.f1a').css('display', 'block')
    $('div div').not('.f1a').css('display', 'none')
  }
})



  $('a.f1b').click(function () {
    $('div.f1b').css('display', 'block')
    $('div div').not('.f1b').css('display', 'none')
    localStorage.setItem('place', 'f1b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })



  $('a.f2a').click(function () {
    $('div.f2a').css('display', 'block')
    $('div div').not('.f2a').css('display', 'none')
    localStorage.setItem('place', 'f2a')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.f2b').click(function () {
    $('div.f2b').css('display', 'block')
    $('div div').not('.f2b').css('display', 'none')
    localStorage.setItem('place', 'f2b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.f2c').click(function () {
    $('div.f2c').css('display', 'block')
    $('div div').not('.f2c').css('display', 'none')
    localStorage.setItem('place', 'f2c')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.f2d').click(function () {
    $('div.f2d').css('display', 'block')
    $('div div').not('.f2d').css('display', 'none')
    localStorage.setItem('place', 'f2d')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })