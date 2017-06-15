(function($) {
  function draw_map(container) {
    var map = L.map(container, {
      dragging: false,
      touchZoom: false,
      zoomControl: false,
      scrollWheelZoom: false
    }).setView([43.49420, -1.46671], 15);
    L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18}).addTo(map); 
  }

  $(document).ready(function() {
    var now = new Date();
    now = now.toJSON();
    var next_rendezvous_index = 0;
    var next_rendezvous = '0000';
    $('#rendezvous .bivouac').each(function (index) {
      var rendezvous = $(this).attr('date');
      if(rendezvous >= now) {
        if(next_rendezvous < now) {
          next_rendezvous_index = index;
          next_rendezvous = rendezvous;
        } else {
          if(rendezvous <= next_rendezvous) {
            next_rendezvous_index = index;
            next_rendezvous = rendezvous;
          }
        }
      } else {
        if(rendezvous >= next_rendezvous) {
          next_rendezvous_index = index;
          next_rendez_vous = rendezvous;
        }
	// Mark as past.
	$(this).addClass('past');
	$($('#rendezvous article')[index]).addClass('past');
      }
    });
    console.log(next_rendezvous_index);
    $('.slider').slick({
      arrows: false,
      infinite: false,
      asNavFor: '.slider-nav',
      initialSlide: next_rendezvous_index
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider',
      infinite: false,
      centerMode: true,
      centerPadding: '40px',
      focusOnSelect: true,
      initialSlide: next_rendezvous_index
    });
    prev_arrow = $('.slick-prev');
  });
})(jQuery);
