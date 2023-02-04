const quotes = [
    {
        quote: "If you think your teacher is tough, wait until you get a boss. He doesn't have tenure.",
        author: "Bill Gates"
    },
    {
        quote: "Not a shred of evidence exists in favor of the idea that life is serious.",
        author: "Brendan Gill"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author: "George Herbert"
    },
    {
        quote: "All would live long, but none would be old.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Life is a fatal complaint, and an eminently contagious one.",
        author: "Oliver Wendell Holmes"
    },
    {
        quote: "There is no cure for birth and death, save to enjoy the interval.",
        author: "George Santayana"
    },
    {
        quote: "Children are the only form of immortality that we can be sure of.",
        author: "Havelock Ellis"
    },
    {
        quote: "Life is something that happens when you can't get to sleep.",
        author: "Fran Lebowitz"
    },
    {
        quote: "The first step to getting the things you want out of life is this: Decide what you want.",
        author: "Ben Stein"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;