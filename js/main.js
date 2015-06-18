
$(document).ready(function(){

	$(".menu").on("click", function(){
		$(".icon_bar, .modal, .navigation li, .social_media li").toggleClass("open");

		//$(".modal").animate({"width": "100%", "opacity": "1"}, 5000);
	});

});