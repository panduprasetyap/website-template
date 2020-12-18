// // event pada saat link di klik
// $('nav-link','.page-scroll').on('click', function(e){

// 	// ambil isi href
// 	var tujuan = $(this).attr('href');
// 	// tangkap elemen ybs
// 	var elemenTujuan = $(tujuan);

// 	// pindahkan scroll
// 	$('body').animate({
// 		scrollTop: elemenTujuan.offset().top - 50
// 	}, 1250, 'swing');

// 	e.preventDefault();

// });
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/// scrollll
$(window).on('scroll load', function() {
  if ($(".navbar").offset().top > 60) {
    $(".navbar").addClass("top-nav-collapse");
  } else {
    $(".navbar").removeClass("top-nav-collapse");
  }
  });
