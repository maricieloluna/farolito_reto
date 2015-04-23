
// hover-circulo

$(document).ready (function()
{
	$(".circulo-mayor").hover
	(
		function()
		{
			$(this).stop().animate({ opacity: 0 }, 1000);
		},
		function()
		{
			$(this).stop().animate({ opacity:1 }, 1000);
		}
	);
});

// navegacion dinamica


$(window).scroll(function() {
	var menu = $(this).scrollTop();
	if ( menu > 500) {
		$(".navbar").addClass("scroll")
	} 
	else if (menu < 500) {
		$(".navbar").removeClass("scroll");
	}
});
