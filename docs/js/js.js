//Main
main();

function main() {
	loadStuff();
}

function loadStuff() {
	//Navigation
	$("#top-nav").load("/ultimateboardgames/docs/pages/top-nav.html");
	//Footer
	$("#footer").load("/ultimateboardgames/docs/pages/footer.html");
}
