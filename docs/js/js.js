//Main
main();

function main() {
	loadStuff();
}

function loadStuff() {
	//Navigation
	$("#top-nav").load("/docs/pages/top-nav.html");
	//Footer
	$("#footer").load("/docs/pages/footer.html");
}
