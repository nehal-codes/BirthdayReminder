import React, { useState } from 'react';
import './quotes.css'

const Quotes = () => {
  const quotes = [
    "Purpose of life is to be happy",
    "Never underestimate yourself",
    "Code daily",
    "Eat a apple daily to keep a doctor away"
  ];

  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
     <div className="quote-container">
      <h4>{quotes[index]}</h4>
      <button onClick={prevQuote}>Back</button>
      <button onClick={nextQuote}>Next</button>
    </div>
  );
};

export default Quotes;
