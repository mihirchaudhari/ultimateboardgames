main();
//Wait for entire page to load
$(window).bind("load", function() {
	setParallax();
});
//Functions on window resize
window.onresize = function(e) {
	setParallax();
};

function main() {
	loadStuff();
}

function loadStuff() {
	//Navigation
	$("#top-nav").load("/docs/pages/top-nav.html");
}

function setParallax() {
	for(var i = 1; i < $(".parallax-group").length; i++) {
		var marginHeight = 0;
		for (var j = 0; j < i; j++) {
			for (var k = 0; k < $(".parallax-group:nth-child(" + (j + 1) + ") .section").length; k++) {
				marginHeight += $(".parallax-group:nth-child(" + (j + 1) + ") .section:nth-child(" + (k + 1) + ")").outerHeight();
				console.log( $(".parallax-group:nth-child(" + (j + 1) + ") .section:nth-child(" + (k + 1) + ")"));
				console.log($(".parallax-group:nth-child(" + (j + 1) + ") .section:nth-child(" + (k + 1) + ")").outerHeight());
			}
		}
		console.log(marginHeight);
		$(".parallax-group:nth-child(" + (i + 1) + ")").css("margin-top", (marginHeight +  i * 1000) + "px");
	}
}
