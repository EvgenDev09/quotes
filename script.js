let container = document.getElementById("quotes");
fetch('https://raw.githubusercontent.com/EvgenDev09/quotes/refs/heads/main/quotes.json').then((response) => response.json()).then((data) => {
    console.log(data);
    for (let i=data.quotes.length-1; i>=0; i--) {
        let curQuote = data.quotes[i];
        console.log(curQuote);
        let quoteElement = `<div class="quote">
                                <img src="authors/${data.authors[curQuote.author].icon}.png" class="quote-author-icon">
                                <div class="quote-container">
                                    <div class="quote-info">
                                        <p class="quote-number">#${i+1}</p>
                                        <div class="quote-group">
                                            <img src="groups/${data.groups[curQuote.group].icon}.png" class="quote-group-icon">
                                            <p class="quote-group-name">${data.groups[curQuote.group].name}</p>
                                        </div>
                                    </div>
                                    <p class="quote-quote">${curQuote.quote}</p>
                                    <p class="quote-author-name">@${data.authors[curQuote.author].name}</p>
                                </div>
                            </div>`
        container.insertAdjacentHTML("beforeend", quoteElement);
    }
});