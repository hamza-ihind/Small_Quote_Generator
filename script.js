const quoteText = document.getElementById("quote"),
	quoteAuthor = document.getElementById("author"),
	quoteBtn = document.getElementById("new-quote"),
	TweetBtn = document.getElementById("twitter"),
	loader = document.getElementById("loader");

function randomQuote() {
	fetch("https://api.quotable.io/random")
		.then((response) => response.json())
		.then((data) => {
			quoteText.textContent = data.content;
			quoteAuthor.textContent = `--${data.author}`;
		});
}

randomQuote();
quoteBtn.addEventListener("click", () => {
	randomQuote();
});

function tweetQuote() {
	const quote = quoteText.innerText;
	const author = quoteAuthor.innerText;
	const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} \n ${author}`;
	window.open(tweetUrl, "_blank");
}

TweetBtn.addEventListener("click", () => {
	tweetQuote();
});

/*async function getQuote() {
	const proxyUrl = "https://cors-anywhere.herokuapp.com/";
	const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
	try {
		const response = await fetch(proxyUrl + apiUrl);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		getQuote();
		console.log("whoops, no quote", error);
	}
}

// On load
getQuote();
*/
