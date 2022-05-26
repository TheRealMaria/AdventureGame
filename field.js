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

$('a.d1a').click(function () {
  localStorage.setItem('place', 'd1a')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
  if (myPlace == 'd1a') {
    $('div.d1a').css('display', 'block')
    $('div div').not('.d1a').css('display', 'none')
  }
})

$('a.d1b').click(function () {
  $('div.d1b').css('display', 'block')
  $('div div').not('.d1b').css('display', 'none')
  localStorage.setItem('place', 'd1b')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})

$('a.d2b').click(function () {
  $('div.d2b').css('display', 'block')
  $('div div').not('.d2b').css('display', 'none')
  localStorage.setItem('place', 'd2b')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})

// if you have d2c as your local storage, then the button on  d2a needs to change go to d2a2
if (localStorage.getItem('place') == 'd2c') {
  $('a.d2a').click(function () {
    $('div.d2a2').css('display', 'block')
    $('div div').not('.d2a2').css('display', 'none')
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

$('a.d2c').click(function () {
  $('div.d2c').css('display', 'block')
  $('div div').not('.d2c').css('display', 'none')
  localStorage.setItem('place', 'd2c')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
$('a.d2d').click(function () {
  $('div.d2d').css('display', 'block')
  $('div div').not('.d2d').css('display', 'none')
  localStorage.setItem('place', 'd2d')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
})
