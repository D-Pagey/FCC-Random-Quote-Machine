const quoteEl = document.getElementById("quote");
const artistEl = document.getElementById("artist");

url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function quoter() {
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data);
    quoteEl.innerHTML = data[0].content;
    artistEl.innerHTML = data[0].title;
})

  .catch(function(error) {
    console.log("Something went wrong");
})

}

document.getElementById("button").addEventListener("click", quoter);
