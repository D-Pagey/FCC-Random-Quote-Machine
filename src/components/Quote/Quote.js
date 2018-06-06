import React from 'react';

import './Quote.css';

function Quote({quote, author, isLoading}) {  
  if (isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="quote-container">
        <span className="quote">{quote}</span> -
          <span className="artist"> {author}</span>
        </div>
    )
  }
}

export default Quote;
