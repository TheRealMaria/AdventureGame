var img = new Image(),
  body = document.getElementsByTagName('body')[0]
img.src = 'images/map.png'
//body.appendChild(img)

var imageWidth = 3000,
  imageHeight = 3000
console.log(imageWidth, imageHeight)

var vpWidth = document.documentElement.clientWidth,
  vpHeight = document.documentElement.clientHeight

img.onload = function () {
  var imageWidth = this.offsetWidth,
    imageHeight = this.offsetHeight,
    vpWidth = document.documentElement.clientWidth,
    vpHeight = document.documentElement.clientHeight

  this.style.position = 'absolute'
  this.style.left = (vpWidth - imageWidth) / 2 + 'px'
  this.style.top = (vpHeight - imageHeight) / 2 + window.pageYOffset + 'px'
}



$('document').load(function () {
  $('html, body')
    .animate({ scrollTop: $('#mapclickdrag').offset().top }, 'slow')
    .animate({ scrollLeft: $('#mapclickdrag').offset().left }, 'slow')
})


<script>
      //$(window).load(document.getElementById('mapclickdrag').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }))

      //var waypoint = new Waypoint({
      //element: document.getElementById('mapclickdrag'),
      //handler: function (direction) {
      //console.log('Scrolled to waypoint!')
      //}
      //})
    </script>


     <script>
      $(document).ready(function (e) {
        e.preventDefault()

        var position = $('#mapclickdrag').offset().top

        $('body, html').animate(
          {
            scrollTop: position,
            scrollLeft: position
          } /* speed */
        )
      })
    </script>