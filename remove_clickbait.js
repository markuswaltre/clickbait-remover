console.log('Clickbait remover is running');

window.addEventListener("scroll", function(evt) {
   removePosts();
});

var query = "";
var websites = [
		"buzzfeed.com",
		"lajkat.se",
		"viralwomen.com",
		"huffingtonpost.com"
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
				console.log('removed');
				posts[item].innerHTML = "Removed <small>by Clickbait remover</small>";
				posts[item].style.color = "lightgrey";
			}

		}
	}

}

buildQuery(websites);
removePosts();
