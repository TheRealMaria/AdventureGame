//Make the DIV element draggagle:
dragElement(document.getElementById('map'))

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  if (document.getElementById('map')) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById('map').onmousedown = dragMouseDown
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown(e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null
    document.onmousemove = null
  }
}

let myPlace = localStorage.getItem('place')

if (myPlace) {
  localStorage.setItem('place', 'one')
  myPlace = 'one'
  console.log(myPlace)
} else {
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
}

$('a.d1a').click(function () {
  localStorage.setItem('place', 'd1a')
  myPlace = localStorage.getItem('place')
  console.log(myPlace)
  if (myPlace == 'd1a') {
    $('p.d1a').css('display', 'block')
    $('p').not('.d1a').css('display', 'none')
  }
})

  $('a.d1b').click(function () {
    $('p.d1b').css('display', 'block')
    $('p').not('.d1b').css('display', 'none')
    localStorage.setItem('place', 'd1b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.d2a').click(function () {
    $('p.d2a').css('display', 'block')
    $('p').not('.d2a').css('display', 'none')
    localStorage.setItem('place', 'd2a')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.d2b').click(function () {
    $('p.d2b').css('display', 'block')
    $('p').not('.d2b').css('display', 'none')
    localStorage.setItem('place', 'd2b')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.d2c').click(function () {
    $('p.d2c').css('display', 'block')
    $('p').not('.d2c').css('display', 'none')
    localStorage.setItem('place', 'd2c')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })
  $('a.d2d').click(function () {
    $('p.d2d').css('display', 'block')
    $('p').not('.d2d').css('display', 'none')
    localStorage.setItem('place', 'd2d')
    myPlace = localStorage.getItem('place')
    console.log(myPlace)
  })