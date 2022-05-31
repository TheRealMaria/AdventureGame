
$('#local-status').html(localStorage.getItem('place'))

let myPlace = localStorage.getItem('place')

if (!myPlace) {
  localStorage.setItem('place', 'one')
  myPlace = 'one'
  console.log(localStorage.getItem('place'))
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

  // if you have d2c as your local storage, then the button on  d2a needs to change go to d2a2
if (localStorage.getItem('place') == 'm2a') {
  $('a.m1b').click(function () {
    $('div.m1b2').css('display', 'block')
    $('div div').not('.m1b2').css('display', 'none')
    localStorage.setItem('place', 'm2a')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
} else {
  $('a.m1b').click(function () {
    $('div.m1b').css('display', 'block')
    $('div div').not('.m1b').css('display', 'none')
    localStorage.setItem('place', 'm1b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
}
$('a.m1b2').click(function () {
  $('div.m1b2').css('display', 'block')
  $('div div').not('.m1b2').css('display', 'none')
  localStorage.setItem('place', 'm1b2')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.m2c2').click(function () {
  $('div.m2c2').css('display', 'block')
  $('div div').not('.m2c2').css('display', 'none')
  localStorage.setItem('place', 'm2c2')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.m2d2').click(function () {
  $('div.m2d2').css('display', 'block')
  $('div div').not('.m2d2').css('display', 'none')
  localStorage.setItem('place', 'm2d2')
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