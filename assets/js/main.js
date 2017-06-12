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
    $('#rendezvous > div > div').slick({
      dots: true
    });
    prev_arrow = $('.slick-prev');
  });
})(jQuery);
