const quoteEl = document.getElementById("quote");
const artistEl = document.getElementById("artist");

const url = "https://talaikis.com/api/quotes/random/";

function quoter() {
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data);
    quoteEl.innerHTML = data.quote;
    artistEl.innerHTML = "<br> - " + data.author;
})

  .catch(function(error) {
    console.log("Something went wrong");
})

}

document.getElementById("button").addEventListener("click", quoter);

/*
  - Open window on clicking twitter button
  - Use the twitter share url
  - concat onto it contents of api call
*/
