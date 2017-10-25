const quoteEl = document.getElementById("quote");
const artistEl = document.getElementById("artist");

url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data);

  function newQuote() {
      quoteEl.innerHTML = data[0].content;
      artistEl.innerHTML = data[0].title;
    }

newQuote();

    document.getElementById("button").addEventListener("click", newQuote);

})

  .catch(function(error) {
    console.log("Something went wrong");
})

/*
User Story: I can click a button to show me a new random quote.

User Story: I can press a button to tweet out a quote.
*/
