//Tigger Secret
tigger();

function tigger() {
	$($(".quote:nth-child(6) .img")).wrapInner("<a href='https://drive.google.com/file/d/1Z4Zr4HmnViHUxdnmwc7xi9DJef0G0B45/view?usp=sharing' target='_blank'></a>");
}

//Kattappa Secret
var clicked = 0;

function imgClicked() {
	clicked++;
	if (clicked == 3) {
		window.open("https://drive.google.com/file/d/1IWo7Tdfa-_mItVqjt7pdPUoN5qBp7Ff2/view?usp=sharing", "_blank");
	}
}
