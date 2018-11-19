generateQuotes();

function generateQuotes() {
	$quotes = $(".quote");
	for (var i = 0; i < $quotes.length; i++) {
		//Store the information from the quotes in an array
		var info = $quotes[i].innerHTML.split("\n");
		info = info.slice(1, 4);
		//Remove tabs from the elements in the array
		for (var j = 0 ; j < info.length; j++) {
			while (info[j].indexOf("\t") != -1) {
				info[j] = info[j].slice(info[j].indexOf("\t") + 1);
			}
		}
		$quotes[i].innerHTML = "<div class='img'><img src=" + info[0] + "></div><div class='txt'><p>\"<i>" + info[1] + "</i>\"</p></div><div class='name'><p>-" + info[2] + "<p></div>";
	}
}
