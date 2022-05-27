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
// if you have d2c as your local storage, then the button on  d2a needs to change go to d2a2
if (localStorage.getItem('place') == 'f2c') {
  $('a.f1a').click(function () {
    $('div.f1a2').css('display', 'block')
    $('div div').not('.f1a2').css('display', 'none')
    localStorage.setItem('place', 'f2c')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
} else {
  $('a.f1a').click(function () {
    $('div.f1a').css('display', 'block')
    $('div div').not('.f1a').css('display', 'none')
    localStorage.setItem('place', 'f1a')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
}

$('a.f1a2').click(function () {
  $('div.f1a2').css('display', 'block')
  $('div div').not('.f1a2').css('display', 'none')
  localStorage.setItem('place', 'f1a2')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})

$('a.f1b2').click(function () {
  $('div.f1b2').css('display', 'block')
  $('div div').not('.f1b2').css('display', 'none')
  localStorage.setItem('place', 'f1b2')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.f2a2').click(function () {
  $('div.f2a2').css('display', 'block')
  $('div div').not('.f2a2').css('display', 'none')
  localStorage.setItem('place', 'f2a2')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.f2b2').click(function () {
  $('div.f2b2').css('display', 'block')
  $('div div').not('.f2b2').css('display', 'none')
  localStorage.setItem('place', 'f2b2')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
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