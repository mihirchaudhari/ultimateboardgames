generateFactions();

function generateFactions() {
	var $factions = $(".faction");
	for (var i = 0; i < $factions.length; i++) {
		//Store the card information in an array
		var info = $factions[i].innerHTML.split("\n");
		info = info.slice(1, info.length);
		//Remove tabs
		for (var j = 0 ; j < info.length; j++) {
			while (info[j].indexOf("\t") != -1) {
				info[j] = info[j].slice(info[j].indexOf("\t") + 1);
			}
		}
		$factions[i].innerHTML = "<div class='header'><img src=" + info[0] + "><h1></h1></div><div class='body'><img src=" + info[3] + "><img src=" + info[4] + "></div><div class='flavor'><h1>" + info[1] + "</h1><p>" + info[2] + "</p></div>";
	}
}
