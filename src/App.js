import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuotes = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data);
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    getQuotes();
  };

  return (
    <>
      <div id="quote-box">
        <h1 className="quote-author" id="author">
          {author}
        </h1>
        <p className="quote" id="text">
          {quote}
        </p>
        <button
          className="btn"
          type="submit"
          id="new-quote"
          onClick={handleClick}
        >
          Next Quote
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote">
          Tweet Quote
        </a>
      </div>
    </>
  );
};

export default App;
