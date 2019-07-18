(function($) {
  function getEventList() {
    // https://developers.google.com/apis-explorer/#s/calendar/v3/calendar.events.list
    // GET https://www.googleapis.com/calendar/v3/calendars/ehc4cpbl9jn3ri019amolrq5kg%40group.calendar.google.com/events?maxResults=20&orderBy=startTime&q=Agenda&singleEvents=true&timeMin=2018-09-01T00%3A00%3A00%2B02%3A00&fields=items(description%2Cend%2FdateTime%2Clocation%2Cstart%2FdateTime%2Csummary)&key={YOUR_API_KEY}
  }
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
      slidesToShow: 4,
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
