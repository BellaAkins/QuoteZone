const theQuotes = document.getElementById("quote");
const theAuthor = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const categorySelect = document.getElementById("category");

function getQuote() {
  let category = categorySelect.value;
  let categoryQuotes = [];

  if (category === "all") {
    // Merge all quotes from all categories into one array
    Object.values(quotes).forEach((quoteArray) => {
      categoryQuotes = categoryQuotes.concat(quoteArray);
    });
  } else {
    categoryQuotes = quotes[category];
  }

  // Pick random quote
  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  const quote = categoryQuotes[randomIndex];

  // Update UI
  theQuotes.innerHTML = quote.content;
  theAuthor.innerHTML = `— ${quote.author}`;
}

// Show one immediately
getQuote();

// Change quote on button click or category change
newQuote.addEventListener("click", getQuote);
categorySelect.addEventListener("change", getQuote);
