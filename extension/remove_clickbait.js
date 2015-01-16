window.addEventListener("scroll", function(evt) {
   removePosts();
});

var query = "";
var websites = [
		"buzzfeed.com",
		"lajkat.se",
		"upworthy.com",
		"expressen.se/omtalat",
		"viralt.aftonbladet.se",
		"newsner.com",
		"dailydip.tv",
		"klippers.se",
		"expressen.se/noje/det-glomde-jag",
		"themindunleashed.org",
		"thechive.com",
		"likes.com",
		"uppskattat.se"
	]

var buildQuery = function(strings) {

	for (x in strings) {
		query += 'a[href*="' + strings[x] + '"]';

		if(x < (strings.length-1)) query += ", ";
	}

}

var postSize = 0;
var removePosts = function() {
	var posts = document.querySelectorAll('.userContentWrapper');
	
	if(posts.length !== postSize) {

		postSize = posts.length;

		for (item in posts) {

			var contains = posts[item].querySelectorAll(query);
			if(contains.length > 0) {
				posts[item].innerHTML = "Removed by Clickbait Remover for Facebook";
				posts[item].style.color = "red";
			}

		}
	}

}

buildQuery(websites);
removePosts();