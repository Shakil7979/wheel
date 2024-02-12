$(document).ready(function(){ 

	// Banner Carousel
	$('.nftImage').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
        slideSpeed: 600,
        nav: false,
        navText: ["<img src='../img/icon_left.svg'>","<img src='../img/icon_right.svg'>"],
		autoplay:true,
	});

    setTimeout(function() { 
        $("#loader").fadeOut(); 
    }, 1000);





});

