const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");
const api_url = "https://dummyjson.com/quotes";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();

  // pick a random quote from the array
  const randomIndex = Math.floor(Math.random() * data.quotes.length);
  const randomQuote = data.quotes[randomIndex];

  // update UI
  quoteEl.innerText = randomQuote.quote;
  authorEl.innerText = `— ${randomQuote.author}`;
}

// load first quote on page load
getQuote(api_url);

// get new quote on button click
quoteBtn.addEventListener("click", () => {
  getQuote(api_url);
});

postBtn.addEventListener("click", () => {
  tweet();
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet",
    "Tweet window",
    "width=600, height=300"
  );
}
