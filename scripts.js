const quoteEl = document.getElementById("quote");
const artistEl = document.getElementById("artist");
const url = "https://talaikis.com/api/quotes/random/";

let responseData;

function quoter() {
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    responseData = data;
    quoteEl.innerHTML = data.quote;
    artistEl.innerHTML = "<br> - " + data.author;
})

  .catch(function(error) {
    console.log("Something went wrong");
})
}

document.getElementById("button").addEventListener("click", quoter);

function tweeter() {
  let twitterUrl = "https://twitter.com/intent/tweet?text=";

  if (responseData !== undefined) {
     window.open(twitterUrl += responseData.quote);
  } else {
     window.open(twitterUrl += "Press the Random Quote button to have something to tweet about.");
  }
}

document.getElementById("tweeter").addEventListener("click", tweeter);
