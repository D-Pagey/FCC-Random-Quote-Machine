const quoteEl = document.getElementById("quote");
const artistEl = document.getElementById("artist");
const buttonEl = document.getElementById("button");
const url = "https://talaikis.com/api/quotes/random/";

function btnState() {
  buttonEl.setAttribute("disabled", true);
  buttonEl.removeAttribute("disabled");
}

btnState();

function changeBtnState() {

}

// need to disable button until receive response 

let responseData;
console.log(responseData);

function quoter() {

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    responseData = data;
    quoteEl.innerHTML = data.quote;
    artistEl.innerHTML = data.author;

})

  .catch(function(error) {
    console.log("Something went wrong");
})
}

buttonEl.addEventListener("click", quoter);

const twitterUrl = "https://twitter.com/intent/tweet?text=";

function withData() {
  window.open(twitterUrl + responseData.quote);
}

function noData() {
   window.open(twitterUrl + "Press the Random Quote button to have something to tweet about.");
}

function tweeter() {
  return (responseData ? withData() : noData());
}

document.getElementById("tweeter").addEventListener("click", tweeter);
