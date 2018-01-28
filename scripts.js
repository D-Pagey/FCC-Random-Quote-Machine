const quoteEl = document.getElementById("quote");
const artistEl = document.getElementById("artist");
const buttonEl = document.getElementById("button");
const url = "https://talaikis.com/api/quotes/random/";

function disableBtn() {
  buttonEl.setAttribute("disabled", true);
}

function enableBtn() {
  buttonEl.removeAttribute("disabled");
}

let responseData;

// Quote functionality
function quoter() {
disableBtn();
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    responseData = data;
    quoteEl.innerHTML = data.quote;
    artistEl.innerHTML = data.author;
    enableBtn();
})

  .catch(function(error) {
    console.log("Something went wrong");
})
}

buttonEl.addEventListener("click", quoter);

// Tweet functionality
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

// Modal functionality
const modalBtn = document.getElementsByClassName('modal-btn');
const modal = document.getElementsByClassName('modal-about');
const button = document.getElementsByClassName('modal-cancel');

modalBtn[0].addEventListener('click', function() {
  modal[0].showModal();
});

button[0].addEventListener('click', function() {
  modal[0].close();
})
