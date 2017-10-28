const quoteEl = document.getElementById("quote");
const artistEl = document.getElementById("artist");
const url = "https://talaikis.com/api/quotes/random/";

let responseData;
let twitterUrl = "https://twitter.com/intent/tweet?text=";

function quoter() {
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    responseData = data;
    console.log(responseData);
    quoteEl.innerHTML = data.quote;
    artistEl.innerHTML = "<br> - " + data.author;
})

  .catch(function(error) {
    console.log("Something went wrong");
})

}

document.getElementById("button").addEventListener("click", quoter);

function tweeter() {
  let shareQuote = responseData.quote || "Click the Random Quote button before sharing on Twitter";
  twitterUrl += shareQuote;
  console.log(twitterUrl);
  window.open(twitterUrl);

}

document.getElementById("tweeter").addEventListener("click", tweeter);
