const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");
const postBtn = document.getElementById("post");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_url);

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
