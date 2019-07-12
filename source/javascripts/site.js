// Below is for fixed header when page is scrolled 30 pixels down
$(function() {
    if ($(".navbar").offset().top > 30) {
      $("header").addClass("affix");
    }

    var locationHash = window.location.hash;

    if (locationHash != '') {
      $(window).scrollTop(0);

      var speed = 850,
          offset = 100;

      $("html, body").animate({
        scrollTop: $(locationHash).offset().top - offset
      }, speed);
    }

    var $nav = $(".nav");

    $nav.each(function () {
      var $this = $(this),
          $active = $this.find("li > a.active"),
          $field = $("<span class='nav-current'>" + $active.html() + "</span>");

      $this.wrapAll("<div class='nav-wrapper'></div>");
      $this.before($field);

      $field.on("click", function () {
        console.log("clicked on $field");
      });

      $this.on("click", "a", function () {
        console.log("clicked a");
      });
    });

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

  $(document).on("click", ".main-nav-link, a.btn-same-site", function(event) {
    event.preventDefault();

    var page = $(this).attr("href"),
        speed = 850,
        offset = 100;

    $("html, body").animate({
      scrollTop: $(page).offset().top - offset
    }, speed);

    return false;
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