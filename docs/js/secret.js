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
		window.open("https://drive.google.com/a/g.coppellisd.com/file/d/11qYiVBTFylLbeBKy3bPY5MlcY8ymma4v/view?usp=drivesdk", "_blank");
	}
}
