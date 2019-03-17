// Below is for fixed header when page is scrolled 30 pixels down
$(function() {
    if ($(".navbar").offset().top > 30) {
      $("header").addClass("affix");
    }
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 30) {
      $("header").addClass("affix");
    } else {
      $("header").removeClass("affix");
    }
  });

  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  var map;
  function initMap() {
    var mapOptions = {
      center: {lat: 50.077, lng: 19.965},
      zoom: 13,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
      position: {lat: 50.0889, lng: 19.9849},
      icon: "/images/marker-46x46.png",
      map: map
    });
  }